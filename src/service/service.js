import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const myApi = axios.create({
    baseURL: BACKEND_URL,
})


// Interceptor to ensure that authenticated requests are properly authorized
myApi.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = token ? `Bearer ${token}` : ""

    return config;
})


myApi.addFavourite = async (id) => {
    const response = await myApi.post(`/favourites/${id}`)
    return response.data
}

myApi.removeFavourite = async (id) => {
    const response = await myApi.delete(`/favourites/${id}`)
    return response.data
}
myApi.createArt = (art) => {
    return myApi.post('/art', art)
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