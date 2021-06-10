import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Modal, Button, Form, Col, Row, Container } from 'react-bootstrap'
import ButtonLoader from '../ButtonLoader'
import maskPhoneNumber from '../../utils'


export default function PhoneModal (props) {
  const {isFetching} = useSelector((state) => state.phones)
  const {item, buttonText, buttonClass, submitModal, showModal, isEdition} = props

  const defaultPhoneState = {
    id: item.id,
    value: item.value,
    masked: maskPhoneNumber(item.value),
    monthyPrice: item.monthyPrice,
    currency: item.currency,
    setupPrice: item.setupPrice
  }

  const [state, setState] = useState({validated: false, showModal: false, phone: defaultPhoneState})
  const handleClick = () => {
    let phone = isEdition? state.phone: defaultPhoneState
    setState({...state, showModal: true, phone: phone})
  }

  const handleClose = () => {
    if (isFetching) return
    setState({...state, showModal: false})
  }

  const handleSubmit = (event) => {
    let phone = defaultPhoneState
    if (isFetching) return
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      phone = {
        ...state.phone,
        setupPrice: parseFloat(event.target.setupPrice.value),
        monthyPrice: parseFloat(event.target.monthyPrice.value),
        currency: event.target.currency.value,
        value: state.phone.value
      }

      event.preventDefault()
      event.stopPropagation()
      setTimeout(() => submitModal(phone, handleClose), 200)
    }

    phone.masked = event.target.maskedPhone.value
    setState({...state, validated: true, phone: phone})
  }

  const handleChange = (event) => {
    let value = event.target.value
    value = value.replace(/\s*\+*\-*/g, '')
    let masked = maskPhoneNumber(value)

    setState({...state, phone: {value: value, masked: masked}})
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
            name="maskedPhone"
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
          <Form.Control name="currency" type="text" defaultValue={item.currency} required placeholder="U$" />
        </Form.Group>
        </Col>
        <Col xs={2}>
        <Form.Group className="mb-3">
          <Form.Label>Monthy price:</Form.Label>
          <Form.Control name="monthyPrice" type="number" defaultValue={item.monthyPrice} required placeholder="Ex: 0.25" />
        </Form.Group>
        </Col>
  
        <Col xs={2}>
        <Form.Group className="mb-3">
          <Form.Label>Setup price:</Form.Label>
          <Form.Control name="setupPrice" type="number" defaultValue={item.setupPrice} required placeholder="Ex: 1.25" />
        </Form.Group>
        </Col>
        </Row>
    </Container>
  )

  let buttonLabel = isEdition? 'Update': 'Create'
  let modalTitle = isEdition? state.phone.masked: 'Register a new number'

  return (
    <div>
      <Modal show={state.showModal && showModal} onHide={handleClose} centered={true} size={'lg'}>
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
      <Button onClick={handleClick} className={buttonClass}>{buttonText}</Button>
    </div>
  )
}

PhoneModal.defaultProps = {
  showModal: true,
  item: {
    id: null,
    value: "",
    masked: "",
    monthyPrice: "",
    currency: "",
    setupPrice: ""}
}