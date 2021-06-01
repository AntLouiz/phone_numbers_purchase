import '@testing-library/jest-dom'

import * as React from 'react'
import { Provider } from 'react-redux'
import { render as rtlRender, screen } from "@testing-library/react"
import Counter from '../Counter'
import store from '../../app/store'

const render = (ui) => {
  const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>
  return rtlRender(ui, {wrapper: Wrapper})
}

describe("Counter Component", () => {
    test("should assert the count value equals zero", () => {
      render(<Counter />)
      let countElement = screen.getByText("0")
      expect(countElement).toBeInTheDocument()
    })
})