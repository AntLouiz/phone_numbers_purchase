import React from 'react'
import { Spinner } from 'react-bootstrap'
import './ButtonLoader.scss'


export default function ButtonLoader () {
  return (
    <div className="root">
    <Spinner animation="border" role="status" className="loader">
      <span className="visually-hidden loader">Loading...</span>
    </Spinner>
    </div>
  )
}