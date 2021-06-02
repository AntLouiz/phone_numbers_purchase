import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../ducks/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  },
})