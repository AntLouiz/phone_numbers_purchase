import '@testing-library/jest-dom'

import * as React from 'react'
import { screen, fireEvent } from "@testing-library/react"
import render from '../../../__mocks__/renderMock'
import PhoneList from '../PhoneList'

describe("PhoneList Component", () => {
    test("should contains a list of phone numbers and some prices", async () => {
      render(<PhoneList />)

      let phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i
      let phonesElements = await screen.findAllByText(phoneRegex)
      expect(phonesElements.length).toBeGreaterThanOrEqual(1)

      let valuesRegex = /^\d+(\.+\d+)*$/i
      let prices = await screen.findAllByText(valuesRegex)
      expect(prices.length).toBeGreaterThanOrEqual(1)
    })

    test("should contains a paginator", async () => {
      render(<PhoneList />)

      let paginatorElement = screen.getByText('…')
      expect(paginatorElement).toBeInTheDocument()
    })

    test("should open a modal after phone item click", async () => {
      render(<PhoneList />)
      
      let phoneItemElements = await screen.findAllByText(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i)
      fireEvent.click(phoneItemElements[0])

      let modalElement = screen.getByText(/purchase/i)
      expect(modalElement).toBeInTheDocument()
    })
})