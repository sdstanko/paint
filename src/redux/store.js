import { configureStore } from '@reduxjs/toolkit'
import simpleTool from './slices/simpleToolSlice.js'
import actionCounter from './slices/actionCounterSlice.js'

export const store = configureStore({
  reducer: {
    simpleTool,
    actionCounter
  },
})

