import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { purchaseItem, removeItem, setFetching } from '../../ducks/phonesSlice'
import { purchasePhone, removePhone } from '../../api/phones'
import PhoneModal from '../PhoneModal'
import ButtonLoader from '../ButtonLoader'
import './PhoneListItem.scss'


export default function PhoneListItem (props) {
  const defaultState = {showModal: false, isLoading: false}
  const [state, setState] = useState(defaultState)
  const dispatch = useDispatch()
  const { item, isEdition } = props

  const handleClick = () => {
    setState({showModal: true})
  }

  const closeModal = () => {
    setState({showModal: false})
  }

  const submitItem = () => {
    dispatch(setFetching(true))

    const handleSuccess = () => {
      setState({showModal: false})
      dispatch(purchaseItem(item))
    }
    const handleError = (error) => console.log(error)

    purchasePhone(item, handleSuccess, handleError)
  }

  const removeListItem = () => {
    dispatch(setFetching(true))
    setState({isLoading: true})

    const handleSuccess = () => {
      setState({showModal: false})
      dispatch(removeItem(item))
    }
    const handleError = (error) => console.log(error)

    removePhone(item, handleSuccess, handleError)
  }

  let modal = (<PhoneModal
    item={item}
    showModal={state.showModal}
    closeModal={closeModal}
    submitModal={submitItem}
    isEdition={isEdition}
  />)

  let actions = null

  if (isEdition) {
    modal = null
    actions = (
      <td>
        <Button variant="danger" onClick={removeListItem} >
          {state.isLoading? <ButtonLoader />: "Remove"}
        </Button>
      </td>
    )
  }

  return (
    <tr key={item.id} className="item">
    <td onClick={handleClick}>{item.value}</td>
    <td onClick={handleClick}>{item.monthyPrice}</td>
    <td onClick={handleClick}>{item.setupPrice}</td>
    <td onClick={handleClick}>{item.currency}</td>
    {modal}
    {actions}
    </tr>
  )
}