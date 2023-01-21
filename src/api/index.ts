import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: import.meta.env.PROD ? undefined : 2000,
})

export { }