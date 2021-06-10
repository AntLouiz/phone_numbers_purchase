import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { setPhones, setLoading } from '../../ducks/phonesSlice'
import { getPhones } from '../../api/phones'
import PhoneList from '../../components/PhoneList'
import Search from '../../components/Search'
import Loader from '../../components/Loader'


export default function Phones () {
  const {results, count, isLoading} = useSelector((state) => state.phones)
  const [state] = useState([])
  const dispatch = useDispatch()

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
        />
        }
      </Row>
    </Container>
  )
}