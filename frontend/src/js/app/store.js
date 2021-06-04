import { configureStore } from '@reduxjs/toolkit'
import phoneListSlice from '../ducks/phoneListSlice'

export default configureStore({
  reducer: {
    phones: phoneListSlice
  },
})