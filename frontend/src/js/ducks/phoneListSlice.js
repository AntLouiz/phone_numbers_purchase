import { createSlice } from '@reduxjs/toolkit'


function getMockedPhones () {
  let phones = []
  for (let index = 1; index < 80; index++) {
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
    initialState: [],
    reducers: {
        getPhones: (state) => {
          let mockedPhones = getMockedPhones()
          state.push(...mockedPhones)
        }
    }
})

export const { getPhones } = phoneListSlice.actions

export default phoneListSlice.reducer