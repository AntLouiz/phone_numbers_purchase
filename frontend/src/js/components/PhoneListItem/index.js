import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { updateItem, removeItem, setFetching, setAlert } from '../../ducks/phonesSlice'
import { updatePhone, removePhone } from '../../api/phones'
import PhoneModal from '../PhoneModal'
import ButtonLoader from '../ButtonLoader'
import './PhoneListItem.scss'


export default function PhoneListItem (props) {
  const defaultState = {showModal: true, isLoading: false}
  const [state, setState] = useState(defaultState)
  const dispatch = useDispatch()
  const { item, isEdition } = props

  const handleClick = () => {
    setState({showModal: true})
  }

  const submitItem = (updatedItem) => {
    updatedItem.id = item.id
    dispatch(setFetching(true))

    const handleSuccess = (message, data) => {
      setState({showModal: false})
      dispatch(updateItem(data))
      dispatch(setAlert({message: message, severity: 'success'}))
    }
    const handleError = (message, error) => console.log(error)
    updatePhone(updatedItem, handleSuccess, handleError)
  }

  const removeListItem = () => {
    dispatch(setFetching(true))
    setState({isLoading: true})

    const handleSuccess = (message, data) => {
      setState({showModal: false})
      dispatch(removeItem(item))
      dispatch(setAlert({message: message, severity: 'success'}))
    }
    const handleError = (message, error) => console.log(error)

    removePhone(item, handleSuccess, handleError)
  }

  let modal = (
    <td>
      <PhoneModal
        item={item}
        buttonText={'Update'}
        submitModal={submitItem}
        showModal={state.showModal}
        isEdition={true}
      />
    </td>)

  let actions = (
    <td>
      <Button variant="danger" onClick={removeListItem} >
        {state.isLoading? <ButtonLoader />: "Remove"}
      </Button>
    </td>
  )

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