import '@testing-library/jest-dom'

import * as React from 'react'
import { screen } from "@testing-library/react"
import render from '../__mocks__/renderMock'
import App from './App'

describe("App Component", () => {
    test("should assert header to be in document", () => {
      render(<App />)
      const header = screen.getByText('Welcome')
      expect(header).toBeInTheDocument();
    })
})