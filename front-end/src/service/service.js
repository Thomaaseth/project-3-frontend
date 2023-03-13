import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const myApi = axios.create({
    baseURL: BACKEND_URL,
    // withCredentials: true
})

myApi.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = token ? `Bearer ${token}` : ""

    return config;
})

myApi.createArt = (art) => {
    return myApi.post('/', art)
}

myApi.getAllArt = (queryString) => {
    return myApi.get(`/art?${queryString}`)
}

myApi.getOneArt = (id) => {
    return myApi.get(`/art/${id}`)
}

myApi.deleteArt = (id) => {
    return myApi.delete(`/art/${id}`)
}

myApi.updateArt = (id, art) => {
    return myApi.patch(`/art/${id}`, art)
}

export default myApi