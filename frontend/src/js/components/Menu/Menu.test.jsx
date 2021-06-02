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
    test("should assert the menu links texts", () => {
      render(<Menu />)
      let menuElement = screen.getByText("0")
      expect(menuElement).toBeInTheDocument()
    })
})