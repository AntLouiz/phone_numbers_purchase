import '@testing-library/jest-dom'

import * as React from 'react'
import { getMockedPhone } from '../../../__mocks__/phonesMock'
import { fireEvent, screen } from '@testing-library/react'
import render from '../../../__mocks__/renderMock'
import PhoneModal from '../PhoneModal'

describe("PhoneModal Component", () => {
    test("should has a purchase and close buttons", () => {
      const phone = getMockedPhone()
      render(<PhoneModal item={phone} isEdition={false} showModal={true}/>)

      let purchaseButton = screen.getByText('Purchase')
      expect(purchaseButton).toBeInTheDocument()

      let closeButtons = screen.getAllByText('Close')
      let firstCloseButtonSeen = closeButtons[0]
      expect(firstCloseButtonSeen).toBeInTheDocument()
    })

    test("should call handleClose after click on close button", async () => {
      const phone = getMockedPhone()
      const handleClose = jest.fn()

      render(<PhoneModal
              item={phone}
              isEdition={false}
              showModal={true}
              closeModal={handleClose}
            />)

      let closeButtons = screen.getAllByText('Close')
      let firstCloseButtonSeen = closeButtons[0]
      fireEvent.click(firstCloseButtonSeen)

      expect(handleClose).toHaveBeenCalledTimes(1)
    })

    test("should call handleSubmit after click on purchase button", async () => {
      const phone = getMockedPhone()
      const handleSubmit = jest.fn()

      render(<PhoneModal
              item={phone}
              isEdition={false}
              showModal={true}
              submitModal={handleSubmit}
            />)

      let purchaseButton = screen.getByText('Purchase')
      fireEvent.click(purchaseButton)

      expect(handleSubmit).toHaveBeenCalledTimes(1)
    })
})