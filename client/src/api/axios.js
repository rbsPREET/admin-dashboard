import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
})

export const getItemsPage = async (pageParam = 1, sort = -1, routeEndpoint, options = {}) => {
    const res = await api.get(`/${routeEndpoint.toLowerCase()}?page=${pageParam}&sort=${sort}`, options)
    return res.data
}

export const userLogin = async (routeEndpoint, options = {}) => {
    const res = await api.post(`/${routeEndpoint.toLowerCase()}`, options)
    return res.data
}

export const userLogout = async (routeEndpoint, options = {}) => {
    const res = await api.get(`/${routeEndpoint.toLowerCase()}`, options)
    return res.data
}

export const getUser = async (routeEndpoint, options = {}) => {
    const res = await api.get(`/${routeEndpoint.toLowerCase()}`, options)
    return res.data
}

export const getPost = async (routeEndpoint, options = {}) => {
    const res = await api.get(`/${routeEndpoint.toLowerCase()}`, options)
    return res.data
}

export const createPost = async (routeEndpoint, options = {}) => {
    const res = await api.post(`/${routeEndpoint.toLowerCase()}`, options)
    return res.data
}

export const getGlobalLastestItems = async (routeEndpoint, options = {}) => {
    const res = await api.get(`/${routeEndpoint.toLowerCase()}`, options)
    return res.data
}