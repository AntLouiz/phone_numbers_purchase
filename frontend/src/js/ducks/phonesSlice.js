import { createSlice } from '@reduxjs/toolkit'

export const phonesSlice = createSlice({
    name: 'phones',
    initialState: {results: [], count: 0, isLoading: true},
    reducers: {
        setPhones: (state, { payload }) => {
          state.results = payload.results
          state.count = payload.count
          state.isLoading = false
        },
        purchaseItem: (state, { payload }) => {
          state.results = state.results.filter((e) => e.id != payload.id)
          state.isLoading = false
        },
        setLoading: (state, { payload }) => {
          state.isLoading = payload.isLoading
        }
    }
})

export const { setPhones, purchaseItem } = phonesSlice.actions

export default phonesSlice.reducer