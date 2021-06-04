import React from 'react'
import { Modal, Button } from 'react-bootstrap'


export default function PhoneModal (props) {
  const {item, showModal, closeModal, submitModal, isEdition} = props

  return (
    <Modal show={showModal} onHide={closeModal} centered={true} size={'lg'}>
    <Modal.Header closeButton>
      <Modal.Title>Phone Number: {item.value}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Pricing details: {item.currency} {item.monthlyPrice} {item.setupPrice}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={closeModal}>
        Close
      </Button>
      <Button variant="primary" onClick={submitModal}>
        {isEdition? "Update": "Purchase"}
      </Button>
    </Modal.Footer>
  </Modal>
  )
}