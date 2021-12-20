/* eslint-disable no-loss-of-precision */
import React, { Component } from 'react'
import Globe from '../../Globe/Globe'
import * as THREE from 'three'

class GlobeComponent extends Component {
    constructor(props) {
        super(props)
        console.log(this)
        this.state = {
            data: this.props.data ? [...this.props.data] : [],
        }

        this.canvasRef = React.createRef()
        this.htmlRef = React.createRef()
    }

    componentDidMount() {
        const { width, height } = this.props
        this.clock = new THREE.Clock()
        this.pointer = new THREE.Vector2()
        console.log('data', this.state)

        this.globe = new Globe(width, height, {
            htmlContainer: this.htmlRef.current,
            data: this.state.data,
        })

        this.canvasRef.current.appendChild(this.globe.domElement)
        this.globe.init()
        this.initListeners()
        this.start()
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.width !== this.props.width ||
            prevProps.height !== this.props.height
        ) {
            this.updateSize()
        }
    }

    componentWillUnmount() {
        this.stop()
        this.globe.destroy()
    }

    addMarker = () => {
        const intersect = this.globe.intersect[0]

        const point = {
            x: intersect.point.x + 0.4,
            y: intersect.point.y + 0.4,
            z: intersect.point.z + 0.4,
        }

        this.setState({
            data: [
                ...this.state.data,
                {
                    coordinates: {
                        x: point.x,
                        y: point.y,
                        z: point.z,
                    },
                },
            ],
        })

        this.props.onAddMarker({
            coordinates: {
                x: point.x,
                y: point.y,
                z: point.z,
            },
        })

        this.globe.addMarker(point.x, point.y, point.z, 'Hi')
    }

    goToMarkerSelected = () => {
        const markerMesh = this.globe.intersects[0]
        const point = markerMesh.object.position

        const marker = this.globe.markers.find(({ marker: m }) => {
            return m.uuid === markerMesh.object.uuid
        })
        const data = marker.getData()
        console.log({ data })
        this.globe.moveCameraToMarker(point)
    }

    updateSize = () => {
        const { width, height } = this.props
        this.globe.camera.aspect = width / height
        this.globe.camera.updateProjectionMatrix()
        console.log({ width, height })
        this.globe.renderer.setSize(width, height)
    }

    onMouseMove = (e) => {
        this.globe.pointer.x =
            (e.clientX / this.globe.domElement.clientWidth) * 2 - 1
        this.globe.pointer.y =
            -(e.clientY / this.globe.domElement.clientHeight) * 2 + 1
    }

    onMouseClick = (e) => {
        if (this.globe.intersects.length > 0) {
            if (this.globe.mode === 'default') this.addMarker()
            this.goToMarkerSelected()
        }
    }

    onCameraEnd = () => {
        this.globe.cameraUpdated = true
        console.log('Camera updated')
    }

    initListeners = () => {
        window.addEventListener('resize', this.onWindowResize, false)
        this.canvasRef.current.addEventListener(
            'mousemove',
            this.onMouseMove,
            false
        )
        this.canvasRef.current.addEventListener(
            'click',
            this.onMouseClick,
            false
        )
        this.globe.cameraControls.addEventListener('sleep', this.onCameraEnd)
    }

    removeListeners = () => {
        window.removeEventListener('resize', this.onWindowResize)
        this.canvasRef.current.removeEventListener(
            'mousemove',
            this.onMouseMove
        )
        this.canvasRef.current.removeEventListener('click', this.onMouseClick)
        this.globe.cameraControls.removeEventListener('sleep', this.onCameraEnd)
    }

    animate = () => {
        // console.log('animate')
        const delta = this.clock.getDelta()
        if (this.globe) {
            this.globe.tick(delta, this.pointer)
        }
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop = () => {
        cancelAnimationFrame(this.frameId)
    }

    render() {
        const { width, height } = this.props
        return (
            <div className="relative" style={{ width, height }}>
                <div
                    ref={this.htmlRef}
                    className="absolute left-0 right-0"
                ></div>
                <div ref={this.canvasRef}></div>
            </div>
        )
    }
}

export default GlobeComponent
