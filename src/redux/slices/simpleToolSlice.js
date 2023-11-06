import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  size: 2,
  activeColor: 1,
  primaryColor: '#000000',
  secondaryColor: '#FFFFFF'
}

export const simpleToolSlice = createSlice({
  name: 'simpleTool',
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload
    },
    setActiveColor: (state, action) => {
      state.activeColor = action.payload
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload
    },
    setSecondaryColor: (state, action) => {
      state.secondaryColor = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSize, setActiveColor, setPrimaryColor, setSecondaryColor } = simpleToolSlice.actions

export default simpleToolSlice.reducer