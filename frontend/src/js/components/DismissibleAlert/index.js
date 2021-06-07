import React, {useState} from 'react'
import {Alert} from 'react-bootstrap'

export default function DismissibleAlert(props) {
  const [show, setShow] = useState(true)
  const {message, severity} = props

  if (show) {
    return (
      <Alert variant={severity} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{message}</Alert.Heading>
      </Alert>
    )
  }
  return <div></div>
}