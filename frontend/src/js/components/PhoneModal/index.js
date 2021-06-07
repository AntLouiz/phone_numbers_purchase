import React, {} from 'react'
import { useSelector } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import ButtonLoader from '../ButtonLoader'


export default function PhoneModal (props) {
  const {isFetching} = useSelector((state) => state.phones)
  const {item, showModal, closeModal, submitModal, isEdition} = props

  const handleSubmit = () => {
    if (isFetching) return
    submitModal()
  }

  const handleClose = () => {
    if (isFetching) return
    closeModal()
  }

  return (
    <Modal show={showModal} onHide={handleClose} centered={true} size={'lg'}>
    <Modal.Header closeButton>
      <Modal.Title>Phone Number: {item.value}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Pricing details: {item.currency} {item.monthlyPrice} {item.setupPrice}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleSubmit} disabled={!!isFetching}>
        {isFetching? <ButtonLoader />: "Purchase"}
      </Button>
    </Modal.Footer>
  </Modal>
  )
}