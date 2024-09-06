import { createSlice } from '@reduxjs/toolkit'
import { login } from './authThunk'

const initialState = {
  isLoading: false,
  isLogin: false,
  username: null,
  accessToken: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // # Login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      state.isLogin = true
      state.username = action.payload.username
      state.accessToken = action.payload.accessToken
    })
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false
      state.isLogin = false
    })
  },
})

export default authSlice.reducer
