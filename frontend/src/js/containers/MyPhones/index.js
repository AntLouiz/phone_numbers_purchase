import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { setPhones, setLoading } from '../../ducks/phonesSlice'
import { getPurchasedPhones } from '../../api/phones'
import PhoneList from '../../components/PhoneList'
import Search from '../../components/Search'
import Loader from '../../components/Loader'

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