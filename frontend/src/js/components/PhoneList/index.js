import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { getPhones } from '../../ducks/phoneListSlice'
import Paginator from '../Paginator'


export default function PhoneList () {
  const {results, count} = useSelector((state) => state.phones)
  const dispatch = useDispatch()

  if (!results.length) {
    dispatch(getPhones(1))
  }

  const handlePageClick = (page) => {
    dispatch(getPhones(page))
  }

  let phoneItems = []
  for (let phone of results) {
    let phoneItem = (
      <div key={phone.id}>
        <span>{phone.value}</span>
        <span>{phone.currency} {phone.monthyPrice}</span>
        <span>{phone.currency} {phone.setupPrice}</span>
      </div>
    )
    phoneItems.push(phoneItem)
  }

  return (
    <Container>
      <Row>
        <Col>{phoneItems}</Col>
      </Row>
      <Row>
        <Paginator
          pageIndex={1}
          totalPages={count}
          handleClick={handlePageClick}
        />
      </Row>
    </Container>
  )
}