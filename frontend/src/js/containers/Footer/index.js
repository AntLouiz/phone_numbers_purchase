import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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