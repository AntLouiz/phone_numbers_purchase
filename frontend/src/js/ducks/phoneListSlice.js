import { createSlice } from '@reduxjs/toolkit'

const mockedPhones = [
  {
    "id": 42,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.03",
    "setupPrice": "3.40",
    "currency": "U$"
  },
  {
    "id": 43,
    "value": "+55 84 91234-4321",
    "monthyPrice": "0.15",
    "setupPrice": "4.40",
    "currency": "BRL$"
  }
]

export const phoneListSlice = createSlice({
    name: 'phones',
    initialState: [],
    reducers: {
        getPhones: (state) => {
            state.push(...mockedPhones)
        }
    }
})

export const { getPhones } = phoneListSlice.actions

export default phoneListSlice.reducer