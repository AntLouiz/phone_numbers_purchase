import { configureStore } from '@reduxjs/toolkit'
import phonesSlice from '../ducks/phonesSlice'


export default configureStore({
  reducer: {
    phones: phonesSlice
  },
})