import React from 'react'
import {Link, NavLink} from "react-router-dom";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './Menu.scss'

export default function Menu () {
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect={true}>
      <Link to="/" className="navbar-brand">PhoneNumbers</Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to="/purchase" className="nav-link">Purchase Phones</Link>
          <Link to="/my-numbers" className="nav-link">My Numbers</Link>
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