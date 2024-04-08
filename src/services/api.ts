import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getLand = () => api.get('/land')
export const getCervejas = () => api.get('/Cervejas')
export const getBurgers = () => api.get('/burgers')
export const getPorcoes = () => api.get('/Porcoes')
export const getSAlcool = () => api.get('/SAlcool')



export default api
