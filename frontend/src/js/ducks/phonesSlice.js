import { createSlice } from '@reduxjs/toolkit'

export const phonesSlice = createSlice({
    name: 'phones',
    initialState: {results: [], count: 0},
    reducers: {
        setPhones: (state, { payload }) => {
          state.results = payload.results
          state.count = payload.count
        }
    }
})

export const { setPhones } = phonesSlice.actions

export default phonesSlice.reducer