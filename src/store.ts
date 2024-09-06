import { configureStore } from '@reduxjs/toolkit'
import projectSlice from './features/project/projectSlice'
import authSlice from './features/auth/authSlice'

export const store = configureStore({
  reducer: {
    project: projectSlice,
    auth: authSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type IRootState = ReturnType<typeof store.getState>
