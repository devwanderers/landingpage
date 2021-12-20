/* eslint-disable no-var */
const THREE = require('three')
const CameraControls = require('camera-controls/dist/camera-controls')
const TWEEN = require('@tweenjs/tween.js')
const Marker = require('./Marker')
const utils = require('./utils')

const addInitialData = function () {
    if (this.data.length === 0) return

    while (this.data.length > 0) {
        const next = this.data.pop()
        const {
            coordinates: { x, y, z },
        } = next

        this.addMarker(x, y, z)
    }
}

const createGlobe = function () {
    if (this.globe) {
        this.scene.remove(this.globe)
    }

    const globeGeo = new THREE.SphereGeometry(this.radius, 40, 30)
    const globeMaterial = new THREE.MeshBasicMaterial()
    const textureGlobe = new THREE.TextureLoader().load('img/dot.png')

    textureGlobe.wrapS = THREE.RepeatWrapping
    textureGlobe.wrapT = THREE.RepeatWrapping
    textureGlobe.repeat.set(80, 80)

    const alphaGlobe = new THREE.TextureLoader().load('img/earth_1.png')

    globeMaterial.map = alphaGlobe

    this.globe = new THREE.Mesh(globeGeo, globeMaterial)

    this.scene.add(this.globe)
}

const createArrowHelper = function () {
    if (this.arrowHelper) {
        this.scene.remove(this.arrowHelper)
    }

    this.arrowHelper = new THREE.ArrowHelper(
        new THREE.Vector3(),
        new THREE.Vector3(),
        25,
        0xffff00
    )
    this.scene.add(this.arrowHelper)
}

const raycastGlobe = function () {
    this.raycaster.setFromCamera(this.pointer, this.camera)
    this.intersect = this.raycaster.intersectObject(this.globe, false)
    if (this.intersect.length > 0) {
        const _intersect = this.intersect[0]
        const n = new THREE.Vector3()

        n.copy(_intersect.face.normal)
        n.transformDirection(_intersect.object.matrixWorld)

        this.arrowHelper.visible = true
        this.arrowHelper.setDirection(n)
        this.arrowHelper.position.copy(_intersect.point)
    } else {
        this.arrowHelper.visible = false
    }
}

const raycastMarkers = function () {
    const meshes = this.markers.reduce((acc, m) => [...acc, m.marker], [])
    this.prevIntersects = this.intersects
    this.intersects = this.raycaster.intersectObjects(meshes, false)

    if (this.intersects.length > 0) {
        const n = new THREE.Vector3()
        n.copy(this.intersects[0].face.normal)
        n.transformDirection(this.intersects[0].object.matrixWorld)

        this.arrowHelper.visible = true
        this.arrowHelper.setDirection(n)
        this.arrowHelper.position.copy(this.intersects[0].object.position)

        this.intersectedObject = this.intersects[0].object
    } else {
        this.arrowHelper.visible = false
        this.intersectedObject = null
    }
}

const markerAnimate = function () {
    this.markers.forEach(({ marker: o }, i) => {
        if (this.intersectedObject && this.intersectedObject.uuid === o.uuid) {
            this.markers[i].selected()
        } else {
            this.markers[i].unSelected()
        }
    })
}

const raycastIntersect = function () {
    this.raycaster.setFromCamera(this.pointer, this.camera)
    raycastMarkers.call(this)
    if (this.mode === 'addMarker') raycastGlobe.call(this)
}

const setArc3D = function (pointStart, pointEnd, smoothness, color, clockWise) {
    // calculate a normal ( taken from Geometry().computeFaceNormals() )
    var cb = new THREE.Vector3()
    var ab = new THREE.Vector3()
    var normal = new THREE.Vector3()
    cb.subVectors(new THREE.Vector3(), pointEnd)
    ab.subVectors(pointStart, pointEnd)
    cb.cross(ab)
    normal.copy(cb).normalize()

    var angle = utils.getAngle(pointStart, pointEnd) // get the angle between vectors

    if (clockWise) angle = angle - Math.PI * 2 // if clockWise is true, then we'll go the longest path

    var angleDelta = angle / (smoothness - 1) // increment

    var geometry = new THREE.BufferGeometry()
    let points = []
    const _points = []
    for (var i = 0; i < smoothness; i++) {
        const point = new THREE.Vector3(
            pointStart.x,
            pointStart.y,
            pointStart.z
        ).applyAxisAngle(normal, angleDelta * i)
        _points.push(point)
        points = [...points, point.x, point.y, point.z]
    }
    const vertices = new Float32Array(points) // 3 vertices per point
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    const mesh = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({
            color: color,
        })
    )
    return {
        mesh,
        points,
        _points,
        angle,
    }
}

const createPath = function (target) {
    const { x: tx, y: ty, z: tz } = target
    const { x: cx, y: cy, z: cz } = this.camera.position

    var altitude = this.getCameraAltitude()
    const coeff = altitude / this.radius
    const arc = setArc3D(
        new THREE.Vector3(cx, cy, cz),
        new THREE.Vector3(tx * coeff, ty * coeff, tz * coeff),
        150,
        'lime',
        false
    )

    this.scene.add(arc.mesh)

    return { points: arc._points, angle: (arc.angle * 180) / Math.PI }
}

const zoomIn = function (callback) {
    var altitude = this.getCameraAltitude()
    const dolly = { progress: altitude }

    new TWEEN.Tween(dolly)
        .to({ progress: this.minZoom }, 250)
        .onUpdate(() => {
            this.cameraControls.dollyTo(dolly.progress, false)
        })
        .onComplete(() => callback())
        .start()
}

const zoomInOut = function (duration, callback) {
    var altitude = this.getCameraAltitude()
    const dolly = { progress: altitude }

    new TWEEN.Tween(dolly)
        .to({ progress: this.maxZoom }, duration)
        .onUpdate(() => {
            this.cameraControls.dollyTo(dolly.progress, false)
        })
        .onComplete(() => callback())
        .start()
}

const followPath = function (points, duration, callback) {
    const position = { progress: 0 }
    new TWEEN.Tween(position)
        .to({ progress: points.length - 1 }, duration)
        // .delay (1000)
        // .easing(TWEEN.Easing.Cubic.Out)
        .onUpdate(() => {
            const _temp = Math.floor(position.progress)
            const point = points[_temp]
            const cameraX = point.x
            const cameraY = point.y
            const cameraZ = point.z
            this.cameraControls.setLookAt(
                cameraX,
                cameraY,
                cameraZ,
                0,
                0,
                0,
                false
            )
        })
        .onComplete(() => {
            callback()
        })
        .start()
}

const checkCameraAltitude = function () {
    const altitude = Math.floor(this.getCameraAltitude())

    if (altitude === this.minZoom) {
        this.enabledMarkersHtml = false
    } else {
        this.enabledMarkersHtml = true
    }
}

const setEnabledMarkersHtml = function () {
    if (this.prevEnabledMarkersHtml !== this.enabledMarkersHtml) {
        this.prevEnabledMarkersHtml = this.enabledMarkersHtml

        this.markers.forEach((m, i) => {
            m.setEnabledHtml(this.enabledMarkersHtml)
            if (!this.enabledMarkersHtml) {
                m.clearHtml()
            }
        })
    }
}

function Globe(width, height, opts = {}) {
    CameraControls.install({ THREE: THREE })

    this.width = width
    this.height = height
    this.markers = []
    this.activeTransition = false
    this.pointer = new THREE.Vector2()
    this.prevMarkerSelected = null
    this.enabledMarkersHtml = true
    this.cameraUpdated = false

    // Raycast
    this.intersectedObject = null
    this.prevIntersects = null
    this.intersects = []
    this.intersect = []

    const defaults = {
        minZoom: 325,
        maxZoom: 500,
        radius: 200,
        data: [],
        mode: 'default',
        htmlContainer: null,
        ...opts,
    }

    for (var i in defaults) {
        if (!this[i]) {
            this[i] = defaults[i]
        }
    }

    this.renderer = new THREE.WebGL1Renderer({ antialias: true })

    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.sortObjects = false

    this.domElement = this.renderer.domElement
}

Globe.prototype.init = function (cb) {
    this.scene = new THREE.Scene()
    this.scene.add(new THREE.AmbientLight(0x050505))

    this.scene.fog = new THREE.Fog(0x535ef3, 400, 2000)

    this.camera = new THREE.PerspectiveCamera()
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.camera.position.z = this.maxZoom

    this.scene.add(this.camera)

    this.cameraControls = new CameraControls(this.camera, this.domElement)
    this.cameraControls.minDistance = this.minZoom
    this.cameraControls.maxDistance = this.maxZoom

    createGlobe.call(this)
    createArrowHelper.call(this)
    this.raycaster = new THREE.Raycaster()
}

Globe.prototype.destroy = function (cb) {
    var _this = this
    this.active = false

    setTimeout(function () {
        while (_this.scene.children.length > 0) {
            _this.scene.remove(_this.scene.children[`0`])
        }
        if (typeof callback === 'function') {
            cb()
        }
    }, 1000)
}

Globe.prototype.addMarker = function (posX, posY, posZ, label) {
    const marker = new Marker(
        posX,
        posY,
        posZ,
        this.globe,
        this.camera,
        this.domElement,
        this.htmlContainer,
        { canvasWidth: this.width, canvasHeight: this.height }
    )

    this.markers.push(marker)

    return marker
}

Globe.prototype.moveCameraToMarker = function (point) {
    if (!this.activeTransition) {
        const distance = utils.distanceTo(this.camera.position, point)
        const altitude = this.getCameraAltitude()

        const diff = this.maxZoom - this.minZoom

        if (point === this.prevMarkerSelected && distance < diff * 0.4) return

        this.cameraControls.enabled = false
        this.activeTransition = true

        TWEEN.removeAll()
        if (altitude !== this.maxZoom && distance > diff * 0.5) {
            this.prevMarkerSelected = point
            zoomInOut.call(this, distance, () => {
                const path = createPath.call(this, point)

                followPath.call(this, path.points, distance, () => {
                    zoomIn.call(this, () => {
                        this.cameraControls.enabled = true
                        this.activeTransition = false
                    })
                })
            })
        } else {
            const path = createPath.call(this, point)

            followPath.call(this, path.points, distance, () => {
                zoomIn.call(this, () => {
                    this.cameraControls.enabled = true
                    this.activeTransition = false
                })
            })
        }
    }
}

Globe.prototype.getCameraAltitude = function () {
    return utils.distanceTo(this.camera.position, new THREE.Vector3(0, 0, 0))
}

Globe.prototype.tick = function (delta) {
    if (!this.camera) {
        return
    }

    if (!this.firstRunTime) {
        this.firstRunTime = Date.now()
    }
    // console.log(this.data)
    addInitialData.call(this)

    // this.markers.forEach((m) => {
    // 	m.updateElementPosition();
    // });

    if (this.cameraUpdated) {
        this.cameraUpdated = false
        checkCameraAltitude.call(this)
    }
    setEnabledMarkersHtml.call(this)

    raycastIntersect.call(this)
    markerAnimate.call(this)

    this.cameraControls.update(delta)
    TWEEN.update()

    this.renderer.render(this.scene, this.camera)
}

module.exports = Globe
