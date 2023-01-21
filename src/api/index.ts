import axios, { HeadersDefaults } from 'axios'

const api = axios.create({
	baseURL: import.meta.env.VITE_API,
	timeout: import.meta.env.PROD ? undefined : 2000
})

api.interceptors.request.use(
	async (config) => {
		const token = window.localStorage.getItem('accessToken')
		config.headers = config.headers ?? {}

		if (token) {
			//@ts-ignore
			config.headers.Authorization = token
		}

		return config
	},
	(error) => {
		console.log(error)
	}
)

export default api

