import '@testing-library/jest-dom'

import * as React from 'react'
import { Provider } from 'react-redux'
import { render as rtlRender, screen } from "@testing-library/react"
import App from './App'
import store from './app/store'

const render = (ui) => {
  const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>
  return rtlRender(ui, {wrapper: Wrapper})
}

describe("App Component", () => {
    test("should assert header to be in document", () => {
      render(<App />)
      const header = screen.getByText('My Flask + React web app')
      expect(header).toBeInTheDocument();
    })
})