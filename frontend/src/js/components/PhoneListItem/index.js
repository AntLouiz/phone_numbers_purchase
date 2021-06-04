import React from 'react'
import './PhoneListItem.scss'

export default function PhoneListItem (props) {
  const { item, handleClick } = props

  return (
    <tr key={item.id} onClick={handleClick} className="item">
      <td>{item.value}</td>
      <td>{item.monthyPrice}</td>
      <td>{item.setupPrice}</td>
      <td>{item.currency}</td>
    </tr>
  )
}