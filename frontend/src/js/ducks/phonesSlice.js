import { createSlice } from '@reduxjs/toolkit'
import { getPaginatedPhones } from '../../__mocks__/phonesMock'

export const phonesSlice = createSlice({
    name: 'phones',
    initialState: {results: [], count: 0},
    reducers: {
        getPhones: (state, { payload }) => {
          let page = payload
          let response = getPaginatedPhones(page)

          state.results = response.results
          state.count = response.count
        }
    }
})

export const { getPhones } = phonesSlice.actions

export default phonesSlice.reducer