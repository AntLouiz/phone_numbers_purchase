import React from 'react'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import PhoneList from '../../components/PhoneList'

export default function Phones () {
  return (
    <Container>
      <Row>
        <Col>List phones to purchase</Col>
      </Row>
      <Row>
        <PhoneList />
      </Row>
    </Container>
  )
}