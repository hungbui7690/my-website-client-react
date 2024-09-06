import { createSlice } from '@reduxjs/toolkit'
import { login, logout } from './authThunk'

const initialState = {
  isLoading: false,
  isLogin: false,
  username: localStorage.getItem('username'),
  accessToken: localStorage.getItem('accessToken'),
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
      const payload = action.payload

      state.isLoading = false
      state.isLogin = true
      state.username = payload.username
      state.accessToken = payload.accessToken
      localStorage.setItem('username', payload.username)
      localStorage.setItem('isLogin', 'true')
      localStorage.setItem('accessToken', payload.accessToken)
    })
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false
      state.isLogin = false
    })

    // # Logout
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false
      state.isLogin = false
      state.username = null
      state.accessToken = null
      localStorage.setItem('username', '')
      localStorage.setItem('isLogin', '')
      localStorage.setItem('accessToken', '')
    })
    builder.addCase(logout.rejected, (state) => {
      state.isLoading = false
      state.isLogin = false
    })
  },
})

export default authSlice.reducer
