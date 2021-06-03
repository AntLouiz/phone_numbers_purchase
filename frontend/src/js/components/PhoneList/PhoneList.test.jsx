import '@testing-library/jest-dom'

import * as React from 'react'
import { Provider } from 'react-redux'
import { render as rtlRender, screen } from "@testing-library/react"
import PhoneList from '../PhoneList'
import store from '../../app/store'

const render = (ui) => {
  const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>
  return rtlRender(ui, {wrapper: Wrapper})
}

describe("PhoneList Component", () => {
    test("should contains a list of phone numbers and some prices", async () => {
      render(<PhoneList />)

      let phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i
      let phonesElements = await screen.findAllByText(phoneRegex)
      expect(phonesElements.length).toBeGreaterThanOrEqual(1)

      let valuesRegex = /^.+ \d+(\.+\d+)*$/i
      let prices = await screen.findAllByText(valuesRegex)
      expect(prices.length).toBeGreaterThanOrEqual(1)
    })

    test("should contains a paginator", async () => {
      render(<PhoneList />)

      expect(1).toBe(2)
    })
})