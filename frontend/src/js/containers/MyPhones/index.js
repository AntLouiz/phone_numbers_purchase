import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import PhoneList from '../../components/PhoneList'
import { getPurchasedPhones } from '../../api/phones'
import { setPhones, setLoading } from '../../ducks/phonesSlice'

export default function MyPhones () {
  const {results, count, isLoading} = useSelector((state) => state.phones)
  let appLoading = true
  const dispatch = useDispatch()

  const handlePageClick = (page) => {
    const handleSuccess = (data) => {
      dispatch(setLoading(false))
      dispatch(setPhones(data))
    }

    const handleError = (data) => {
      console.log(data)
      console.log("Erro")
    }
    getPurchasedPhones({pageIndex: page}, handleSuccess, handleError)
  }

  const handleSuccess = (data) => {
    dispatch(setPhones(data))
  }

  const handleError = (data) => {
    console.log(data)
    console.log("Erro")
  }

  if (!results.length) {
    getPurchasedPhones({pageIndex: 1}, handleSuccess, handleError)
  } else {
    appLoading = false
  }

  if (isLoading) {
    appLoading = true
  }

  return (
    <Container>
      <Row>
        <Col>List phones to purchase</Col>
      </Row>
      <Row>
        {appLoading? "Loading...":
        <PhoneList
          results={results}
          count={count}
          handlePageClick={handlePageClick}
        />
        }
      </Row>
    </Container>
  )
}