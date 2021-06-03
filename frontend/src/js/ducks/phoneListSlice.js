import { createSlice } from '@reduxjs/toolkit'
import getMockedPhones from '../../__mocks__/phonesMock'

export const phoneListSlice = createSlice({
    name: 'phones',
    initialState: {results: [], count: 0},
    reducers: {
        getPhones: (state, { payload }) => {
          let page = payload
          let mockedPhones = getMockedPhones()
          let count = mockedPhones.length
          let paginatedPhones = mockedPhones.slice(page-1, count)

          state.results = paginatedPhones
          state.count = count
        }
    }
})

export const { getPhones } = phoneListSlice.actions

export default phoneListSlice.reducer