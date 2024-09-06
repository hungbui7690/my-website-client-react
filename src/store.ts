import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './features/project/projectSlice'
import authReducer from './features/auth/authSlice'

export const store = configureStore({
  reducer: {
    project: projectReducer,
    auth: authReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type IRootState = ReturnType<typeof store.getState>
