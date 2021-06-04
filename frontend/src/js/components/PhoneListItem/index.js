import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import './PhoneListItem.scss'
import PhoneModal from '../PhoneModal'

export default function PhoneListItem (props) {
  const defaultState = {showModal: false}
  const [state, setState] = useState(defaultState)
  const { item } = props

  const handleClick = () => {
    setState({showModal: true})
  }

  const closeModal = () => {
    setState({showModal: false})
  }

  return (
    <tr key={item.id} className="item">
    <td onClick={handleClick}>{item.value}</td>
    <td onClick={handleClick}>{item.monthyPrice}</td>
    <td onClick={handleClick}>{item.setupPrice}</td>
    <td onClick={handleClick}>{item.currency}</td>
    <PhoneModal
      item={item}
      showModal={state.showModal}
      closeModal={closeModal}
    />
    </tr>
  )
}