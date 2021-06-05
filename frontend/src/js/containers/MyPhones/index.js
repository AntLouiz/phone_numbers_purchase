import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import PhoneList from '../../components/PhoneList'
import { getPurchasedPhones } from '../../api/phones'
import { setPhones, setLoading } from '../../ducks/phonesSlice'

export default function MyPhones () {
  const {results, count, isLoading} = useSelector((state) => state.phones)
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

  useEffect(() => {
    dispatch(setLoading(true))
    getPurchasedPhones({pageIndex: 1}, handleSuccess, handleError)
  }, [])

  return (
    <Container>
      <Row>
        <Col>List phones to purchase</Col>
      </Row>
      <Row>
        {isLoading? "Loading...":
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