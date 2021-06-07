import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import PhoneList from '../../components/PhoneList'
import Search from '../../components/Search'
import Loader from '../../components/Loader'
import { getPhones } from '../../api/phones'
import { setPhones, setLoading } from '../../ducks/phonesSlice'

export default function Phones () {
  const {results, count, isLoading} = useSelector((state) => state.phones)
  const [state] = useState([])
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
    getPhones({pageIndex: page}, handleSuccess, handleError)
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
    getPhones({pageIndex: 1}, handleSuccess, handleError)
  }, [state])

  const handleSearch = (searchText) => {
    const handleSuccess = (data) => {
      dispatch(setPhones(data))
    }
    dispatch(setLoading(true))
    getPhones({search: searchText}, handleSuccess, handleError)
  }

  return (
    <Container>
      <Row>
        <Col>List phones to purchase</Col>
      </Row>
      <Row>
        <Search handleSearch={handleSearch}/>
        {isLoading? <Loader />:
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