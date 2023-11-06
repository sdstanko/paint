import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  all: 0,
  current: 0
}

export const actionCounterSlice = createSlice({
  name: 'actionCounter',
  initialState,
  reducers: {
    increaseAllCounter: (state) => {
      state.all += 1
    },
	setAllCounter: (state, action) => {
		state.all = action.payload
	},
	increaseCurrentCounter: (state) => {
      state.current += 1
    },
	decreaseCurrentCounter: (state) => {
      state.current -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increaseAllCounter, setAllCounter, increaseCurrentCounter, decreaseCurrentCounter } = actionCounterSlice.actions

export default actionCounterSlice.reducer