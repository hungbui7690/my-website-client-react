import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../utils/axios'
import { type AxiosResponse } from 'axios'

export const createProject = createAsyncThunk(
  'post/uploadImage',
  async (formData: FormData, thunkAPI) => {
    try {
      const res: AxiosResponse = await axiosInstance.post('/post', formData)
      console.log(res.data)
      return res.data
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  }
)
