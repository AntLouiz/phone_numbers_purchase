import { createSlice } from '@reduxjs/toolkit'

export const phonesSlice = createSlice({
    name: 'phones',
    initialState: {results: [], count: 0},
    reducers: {
        setPhones: (state, { payload }) => {
          state.results = payload.results
          state.count = payload.count
        },
        purchaseItem: (state, { payload }) => {
          state.results = state.results.filter((e) => e.id != payload.id)
        }
    }
})

export const { setPhones, purchaseItem } = phonesSlice.actions

export default phonesSlice.reducer