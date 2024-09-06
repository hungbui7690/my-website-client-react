import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects: [],
  amount: 0, // how many item of that specific products
  total: 0, // total price
  isLoading: true,
  isLogin: false,
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    deleteProject: (state) => {
      state.isLogin = true
    },
  },
})

export default projectSlice.reducer
export const { deleteProject } = projectSlice.actions
