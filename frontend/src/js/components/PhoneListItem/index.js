import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function PhoneListItem (props) {
  const { item } = props

  return (
    <tr key={item.id}>
      <td>{item.value}</td>
      <td>{item.monthyPrice}</td>
      <td>{item.setupPrice}</td>
      <td>{item.currency}</td>
    </tr>
  )
}