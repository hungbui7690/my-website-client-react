import { type AxiosResponse } from 'axios'
import { axiosInstance } from './axios'

export const uploadImage = async (formData: FormData) => {
  try {
    const res: AxiosResponse = await axiosInstance.post(
      '/post/uploadImage',
      formData
    )
    console.log(res.data)
    return res.data
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
