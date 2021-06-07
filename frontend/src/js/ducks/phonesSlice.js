import { createSlice } from '@reduxjs/toolkit'

export const phonesSlice = createSlice({
    name: 'phones',
    initialState: {results: [], count: 0, isLoading: true, isFetching: false, alert: {}},
    reducers: {
        setPhones: (state, { payload }) => {
          state.results = payload.results
          state.count = payload.count
          state.isLoading = false
          state.isFetching = false
          state.alert = {}
        },
        purchaseItem: (state, { payload }) => {
          state.results = state.results.filter((e) => e.id != payload.id)
          state.isLoading = false
          state.isFetching = false
          state.alert = {}
        },
        removeItem: (state, { payload }) => {
          state.results = state.results.filter((e) => e.id != payload.id)
          state.isLoading = false
          state.isFetching = false
          state.alert = {}
        },
        setLoading: (state, { payload }) => {
          state.isLoading = payload
        },
        setFetching: (state, { payload }) => {
          state.isFetching = payload
        },
        setAlert: (state, { payload }) => {
          const {message, severity} = payload
          state.alert.message = message
          state.alert.severity = severity
        }
    }
})

export const { setPhones, purchaseItem, removeItem, setLoading, setFetching, setAlert } = phonesSlice.actions

export default phonesSlice.reducer