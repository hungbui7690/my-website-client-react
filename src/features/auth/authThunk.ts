import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../utils/axios'
import { type AxiosResponse } from 'axios'

export const login = createAsyncThunk(
  'auth/login',
  async (formData: FormData, thunkAPI) => {
    try {
      const res: AxiosResponse = await axiosInstance.post(
        '/auth/login',
        formData
      )
      return res.data
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    const res: AxiosResponse = await axiosInstance.post('/auth/logout')
    return res.data
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
})
