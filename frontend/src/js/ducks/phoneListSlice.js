import { createSlice } from '@reduxjs/toolkit'
import getMockedPhones from '../../__mocks__/phonesMock'
import PAGE_SIZE from '../settings'

function paginate(array, pageSize, pageNumber) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

export const phoneListSlice = createSlice({
    name: 'phones',
    initialState: {results: [], count: 0},
    reducers: {
        getPhones: (state, { payload }) => {
          let page = payload
          const pageSize = 50
          let mockedPhones = getMockedPhones()
          let count = mockedPhones.length
          let paginatedPhones = paginate(mockedPhones, pageSize, page)

          state.results = paginatedPhones
          state.count = count
        }
    }
})

export const { getPhones } = phoneListSlice.actions

export default phoneListSlice.reducer