import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Modal, Button, Form, Col, Row, Container } from 'react-bootstrap'
import ButtonLoader from '../ButtonLoader'


export default function PhoneModal (props) {
  const {isFetching} = useSelector((state) => state.phones)
  const defaultPhoneState = {
    value: "",
    masked: "",
    monthyPrice: "",
    currency: "",
    setupPrice: ""
  }
  const [state, setState] = useState({validated: false, phone: defaultPhoneState})
  const {item, showModal, closeModal, submitModal, isEdition} = props

  const handleSubmit = (event) => {
    if (isFetching) return
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      let phone = {
        setupPrice: event.target.setupPrice.value,
        monthyPrice: event.target.monthyPrice.value,
        currency: event.target.currency.value,
        value: state.phone.value
      }

      event.preventDefault()
      event.stopPropagation()
      setTimeout(() => submitModal(phone), 200)
    }

    setState({validated: true, phone: state.phone})
  }

  const handleClose = () => {
    if (isFetching) return
    closeModal()
  }

  const handleChange = (event) => {
    let masked = event.target.value
    let value = masked.replace(/\s*\+*\-*/g, '')

    let region = value.substring(0, 2)
    let ddd = value.substring(2,4)

    let number
    let number1 = value.substring(4,9)
    let number2 = value.substring(9, 13)
    
    if (number2) {
      number = `${number1}-${number2}`
    } else {
      number = `${number1}`
    }

    masked = `+${region} ${ddd} ${number}`
    masked = masked.trim()

    setState({phone: {value: value, masked: masked}})
  }

  const formInputs = (
    <Container>
        <Row>
        <Col xs={4}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number:</Form.Label>
          <Form.Control
            type="tel"
            maxLength="17"
            value={state.phone.masked}
            required
            pattern="[\+]\d{2}[\s]\d{2}[\s]\d{4,5}[\-]\d{4}"
            placeholder="Ex: +55 98 99554-1122"
            onChange={handleChange}
          />
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col xs={2}>
        <Form.Group className="mb-3">
          <Form.Label>Currency:</Form.Label>
          <Form.Control name="currency" type="text" required placeholder="U$" />
        </Form.Group>
        </Col>
        <Col xs={2}>
        <Form.Group className="mb-3">
          <Form.Label>Monthly price:</Form.Label>
          <Form.Control name="monthyPrice" type="number" required placeholder="Ex: 0.25" />
        </Form.Group>
        </Col>
  
        <Col xs={2}>
        <Form.Group className="mb-3">
          <Form.Label>Setup price:</Form.Label>
          <Form.Control name="setupPrice" type="number" required placeholder="Ex: 1.25" />
        </Form.Group>
        </Col>
        </Row>
    </Container>
  )

  let buttonLabel = isEdition? 'Update': 'Create'
  let modalTitle = isEdition? item.value: 'Register a new number'

  return (
    <Modal show={showModal} onHide={handleClose} centered={true} size={'lg'}>
    <Form noValidate validated={state.validated} onSubmit={handleSubmit}>
    <Modal.Header closeButton>
      <Modal.Title>{modalTitle}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {formInputs}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" type="submit" disabled={!!isFetching}>
        {isFetching? <ButtonLoader />: buttonLabel}
      </Button>
    </Modal.Footer>
    </Form>
  </Modal>
  )
}