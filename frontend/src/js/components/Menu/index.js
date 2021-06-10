import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'
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
          <Link to="/phones" className="nav-link">Phones numbers</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}