import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../ducks/counterSlice'
import phoneListSlice from '../ducks/phoneListSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    phones: phoneListSlice
  },
})