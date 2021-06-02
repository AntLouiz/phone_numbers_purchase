import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './Menu.scss'

export default function Menu () {
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect={true}>
      <Navbar.Brand href="#">PhoneNumbers</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#purchase">Purchase Phones</Nav.Link>
          <Nav.Link href="#my-numbers">My Numbers</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search phone numbers"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}