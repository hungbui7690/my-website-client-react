import { axiosInstance } from './axios'
import { type AxiosResponse } from 'axios'

export const createTag = async (formData: FormData) => {
  try {
    const res: AxiosResponse = await axiosInstance.post('/tag', formData)
    console.log(res.data)
    return res.data
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const fetchAllTags = async () => {
  try {
    const res: AxiosResponse = await axiosInstance.get('/tag')
    console.log(res.data)
    return res.data
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const getSingleTag = async (id: string) => {
  try {
    const res: AxiosResponse = await axiosInstance.get(`/tag/${id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
