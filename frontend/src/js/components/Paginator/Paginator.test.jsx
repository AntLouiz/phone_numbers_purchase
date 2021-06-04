import '@testing-library/jest-dom'

import * as React from 'react'
import { Provider } from 'react-redux'
import { render as rtlRender, screen } from "@testing-library/react"
import Paginator from '../Paginator'
import store from '../../app/store'

const render = (ui) => {
  const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>
  return rtlRender(ui, {wrapper: Wrapper})
}

describe("Paginator Component", () => {
    test("should show the pagination with elipsis", () => {
      render(<Paginator count={80} pageSize={5} pageIndex={2}/>)
      let elipsis = screen.getByText('…')

      expect(elipsis).toBeInTheDocument()
    })
})