import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: '',
})
axiosInstance.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response)
        }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error)
            })
        }
        if (error.response.status === 403) {
            // window.location = '/logout'
        } else if (
            error.response.status === 404 ||
            error.response.status === 500
        ) {
            return new Promise((resolve, reject) => {
                reject(error.response.data)
            })
        } else {
            return new Promise((resolve, reject) => {
                reject(error)
            })
        }
    }
)
export default axiosInstance
