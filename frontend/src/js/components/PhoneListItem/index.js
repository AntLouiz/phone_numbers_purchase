import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './PhoneListItem.scss'
import PhoneModal from '../PhoneModal'
import { purchasePhone } from '../../api/phones'
import { purchaseItem } from '../../ducks/phonesSlice'


export default function PhoneListItem (props) {
  const defaultState = {showModal: false}
  const [state, setState] = useState(defaultState)
  const dispatch = useDispatch()
  const { item } = props

  const handleClick = () => {
    setState({showModal: true})
  }

  const closeModal = () => {
    setState({showModal: false})
  }

  const submitItem = () => {
    const handleSuccess = () => {
      setState({showModal: false})
      dispatch(purchaseItem(item))
    }
    const handleError = (error) => console.log(error)

    purchasePhone(item, handleSuccess, handleError)
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
      submitModal={submitItem}
    />
    </tr>
  )
}