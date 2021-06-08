import { createSlice } from '@reduxjs/toolkit'
import { PAGE_SIZE } from '../settings'

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
        postItem: (state, { payload }) => {
          if (state.count != PAGE_SIZE) {
            state.results = [...state.results, payload]
          }
          state.isLoading = false
          state.isFetching = false
          state.count = state.count + 1
          state.alert = {}
        },
        updateItem: (state, { payload }) => {
          const itemIndex = state.results.findIndex((item) => item.id == payload.id)
          let results = [...state.results]
          results[itemIndex] = payload
          state.results = results
          state.isLoading = false
          state.isFetching = false
          state.alert = {}
        },
        removeItem: (state, { payload }) => {
          state.results = state.results.filter((e) => e.id != payload.id)
          state.isLoading = false
          state.isFetching = false
          state.count = state.count - 1
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

export const { setPhones, postItem, removeItem, setLoading, setFetching, setAlert, updateItem } = phonesSlice.actions

export default phonesSlice.reducer