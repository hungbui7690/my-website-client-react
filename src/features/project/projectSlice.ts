import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects: [],
  isLoading: true,
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
})

export default projectSlice.reducer
