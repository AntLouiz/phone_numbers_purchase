import { createSlice } from '@reduxjs/toolkit'

export const phonesSlice = createSlice({
    name: 'phones',
    initialState: {results: [], count: 0, isLoading: true, isFetching: false},
    reducers: {
        setPhones: (state, { payload }) => {
          state.results = payload.results
          state.count = payload.count
          state.isLoading = false
          state.isFetching = false
        },
        purchaseItem: (state, { payload }) => {
          state.results = state.results.filter((e) => e.id != payload.id)
          state.isLoading = false
          state.isFetching = false
        },
        removeItem: (state, { payload }) => {
          state.results = state.results.filter((e) => e.id != payload.id)
          state.isLoading = false
          state.isFetching = false
        },
        setLoading: (state, { payload }) => {
          state.isLoading = payload
        },
        setFetching: (state, { payload }) => {
          state.isFetching = payload
        }
    }
})

export const { setPhones, purchaseItem, removeItem, setLoading, setFetching } = phonesSlice.actions

export default phonesSlice.reducer