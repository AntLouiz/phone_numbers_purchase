import React from 'react'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import './Footer.scss'

export default function Footer () {
  return (
    <Container className="footer" fluid={true}>
      <Row>
        <Col>Footer</Col>
      </Row>
    </Container>
  )
}