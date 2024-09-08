import axios from 'axios'

export const axiosInstance = axios.create({
  // baseURL: '/api/v1',
  // baseURL: 'http://localhost:5000/api/v1',
  baseURL: 'https://my-website-api-bunjs.onrender.com/api/v1',
  withCredentials: true,
})

axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${
  localStorage.getItem('accessToken') || ''
}`
