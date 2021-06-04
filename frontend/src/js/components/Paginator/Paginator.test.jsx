import '@testing-library/jest-dom'

import * as React from 'react'
import { screen } from "@testing-library/react"
import render from '../../../__mocks__/renderMock'
import Paginator from '../Paginator'

describe("Paginator Component", () => {
    test("should show the pagination with elipsis", () => {
      render(<Paginator count={80} pageSize={5} pageIndex={2}/>)
      let elipsis = screen.getByText('…')

      expect(elipsis).toBeInTheDocument()
    })
})