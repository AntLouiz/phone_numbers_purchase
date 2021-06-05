import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import PhoneList from '../../components/PhoneList'
import { getPhones } from '../../api/phones'
import { setPhones } from '../../ducks/phonesSlice'

export default function Phones () {
  const {results, count} = useSelector((state) => state.phones)
  const dispatch = useDispatch()

  const handlePageClick = (page) => {
    const handleSuccess = (data) => {
      dispatch(setPhones(data))
    }

    const handleError = (data) => {
      console.log(data)
      console.log("Erro")
    }
    getPhones({pageIndex: page}, handleSuccess, handleError)
  }

  const handleSuccess = (data) => {
    dispatch(setPhones(data))
  }

  const handleError = (data) => {
    console.log(data)
    console.log("Erro")
  }

  if (!results.length) {
    getPhones({pageIndex: 1}, handleSuccess, handleError)
  }

  return (
    <Container>
      <Row>
        <Col>List phones to purchase</Col>
      </Row>
      <Row>
        <PhoneList
          results={results}
          count={count}
          handlePageClick={handlePageClick}
        />
      </Row>
    </Container>
  )
}