import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://my-website-api-bunjs.onrender.com/api/v1',
})
