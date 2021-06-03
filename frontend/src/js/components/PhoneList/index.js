import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { getPhones } from '../../ducks/phoneListSlice'


export default function PhoneList () {
  const phones = useSelector((state) => state.phones)
  const dispatch = useDispatch()

  if (!phones.length) {
    dispatch(getPhones())
  }

  let phoneItems = []
  for (let phone of phones) {
    let phoneItem = (
      <div key={phone.id}>
        <span>{phone.value}</span>
        <span>{phone.currency} {phone.monthyPrice}</span>
        <span>{phone.currency} {phone.setupPrice}</span>
      </div>
    )
    phoneItems.push(phoneItem)
  }

  return (
    <Container>
      <Row>
        <Col>{phoneItems}</Col>
      </Row>
    </Container>
  )
}