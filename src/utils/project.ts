import { type AxiosResponse } from 'axios'
import { axiosInstance } from './axios'

export const createProject = async (formData: FormData) => {
  try {
    const res: AxiosResponse = await axiosInstance.post('/post', formData)
    console.log(res.data)
    return res.data
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const getAllProjects = async () => {
  try {
    const res: AxiosResponse = await axiosInstance.get('/post')
    console.log(res.data)
    return res.data
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
