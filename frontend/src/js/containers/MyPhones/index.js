import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import PhoneList from '../../components/PhoneList'
import Search from '../../components/Search'
import Loader from '../../components/Loader'
import { getPurchasedPhones } from '../../api/phones'
import { setPhones, setLoading } from '../../ducks/phonesSlice'

export default function MyPhones () {
  const {results, count, isLoading} = useSelector((state) => state.phones)
  const [state] = useState([])
  const dispatch = useDispatch()

  const handleError = (data) => {
    console.log(data)
    console.log("Erro")
  }

  const handlePageClick = (page) => {
    const handleSuccess = (data) => {
      dispatch(setLoading(false))
      dispatch(setPhones(data))
    }
    getPurchasedPhones({pageIndex: page}, handleSuccess, handleError)
  }

  useEffect(() => {
    const handleSuccess = (data) => {
      dispatch(setPhones(data))
    }
    dispatch(setLoading(true))
    getPurchasedPhones({pageIndex: 1}, handleSuccess, handleError)
  }, [state])

  const handleSearch = (searchText) => {
    const handleSuccess = (data) => {
      dispatch(setPhones(data))
    }
    dispatch(setLoading(true))
    getPurchasedPhones({search: searchText}, handleSuccess, handleError)
  }

  return (
    <Container>
      <Row>
        <Col>List phones to purchase</Col>
      </Row>
      <Search handleSearch={handleSearch}/>
      <Row>
        {isLoading? <Loader />:
        <PhoneList
          results={results}
          count={count}
          handlePageClick={handlePageClick}
          isEdition={true}
        />
        }
      </Row>
    </Container>
  )
}