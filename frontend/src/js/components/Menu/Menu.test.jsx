import '@testing-library/jest-dom'

import * as React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { render as rtlRender, screen, createEvent, fireEvent } from "@testing-library/react"
import Menu from '../Menu'
import store from '../../app/store'

const render = (ui) => {
  const history = createMemoryHistory({initialEntries: ["/", "/purchase", "/my-numbers"]})

  const Wrapper = ({children}) => (
    <Provider store={store}>
      <Router history={history}>
        {children}
      </Router>
    </Provider>
  )
  return {...rtlRender(ui, {wrapper: Wrapper}), history}
}

describe("Menu Component", () => {
    test("should assert the menu links", () => {
      render(<Menu />)
      const indexLink = screen.getByText("PhoneNumbers")
      const purchaseLink = screen.getByText("Purchase Phones")
      const myNumbersLink = screen.getByText("My Numbers")

      expect(indexLink.href).toContain('/')
      expect(purchaseLink.href).toContain('purchase')
      expect(myNumbersLink.href).toContain('my-numbers')
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

    test("should redirect the user to home page after click in the home link", () => {
      const {history} = render(<Menu />)

      const indexLink = screen.getByText("PhoneNumbers")
      fireEvent.click(indexLink)

      expect(history.location.pathname).toBe('/')
    })

    test("should redirect the user to purchase page after click in the purchase link", () => {
      const {history} = render(<Menu />)

      const indexLink = screen.getByText("Purchase Phones")
      fireEvent.click(indexLink)

      expect(history.location.pathname).toBe('/purchase')
    })

    test("should redirect the user to purchase phones page after click in the my phones link", () => {
      const {history} = render(<Menu />)

      const indexLink = screen.getByText("My Numbers")
      fireEvent.click(indexLink)

      expect(history.location.pathname).toBe('/my-numbers')
    })
})