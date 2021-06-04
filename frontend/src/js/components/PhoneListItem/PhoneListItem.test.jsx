import '@testing-library/jest-dom'

import * as React from 'react'
import { screen } from "@testing-library/react"
import render from '../../../__mocks__/renderMock'
import { getMockedPhone } from '../../../__mocks__/phonesMock'
import PhoneListItem from '../PhoneListItem'

describe("PhoneListItem Component", () => {
    test("should contains a phone number", async () => {
      let phone = getMockedPhone(1)
      let table = (
        <table>
          <tbody>
            <PhoneListItem item={phone}/>
          </tbody>
        </table>
      )
      render(table)

      let phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i
      let phonesElements = await screen.findAllByText(phoneRegex)
      expect(phonesElements.length).toBeGreaterThanOrEqual(2)
    })
})