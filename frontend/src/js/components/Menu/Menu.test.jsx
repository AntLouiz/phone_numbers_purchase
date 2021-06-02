import '@testing-library/jest-dom'

import * as React from 'react'
import { Provider } from 'react-redux'
import { render as rtlRender, screen } from "@testing-library/react"
import Menu from '../Menu'
import store from '../../app/store'

const render = (ui) => {
  const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>
  return rtlRender(ui, {wrapper: Wrapper})
}

describe("Menu Component", () => {
    test("should assert the menu links", () => {
      render(<Menu />)
      const indexLink = screen.getByText("PhoneNumbers")
      const purchaseLink = screen.getByText("Purchase Phones")
      const myNumbersLink = screen.getByText("My Numbers")

      expect(indexLink.href).toContain('#')
      expect(purchaseLink.href).toContain('#purchase')
      expect(myNumbersLink.href).toContain('#my-numbers')
    })

    test("should have a search component", () => {
      render(<Menu />)
      const searchElement = screen.getByPlaceholderText("Search phone numbers")
      expect(searchElement).toBeInTheDocument()
      expect(searchElement.type).toBe('search')

      const searchButtonElement = screen.getByText("search")
      expect(searchButtonElement).toBeInTheDocument()
    })

    test("should have a .navbar class", () => {
      const { container } = render(<Menu />)
      expect(container.firstChild).toHaveClass('navbar')
    })

    // test("should have ")
})