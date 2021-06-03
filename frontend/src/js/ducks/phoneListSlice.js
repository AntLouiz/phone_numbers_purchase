import { createSlice } from '@reduxjs/toolkit'


function getMockedPhones () {
  let phones = []
  for (let index = 1; index <= 800; index++) {
    let phone = {
      "id": index,
      "value": `+55 84 91234-432${index}`,
      "monthyPrice": `0.1${index}`,
      "setupPrice": `${index}.40`,
      "currency": "BRL$"
    }
    phones.push(phone)
  }

  return phones
}

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