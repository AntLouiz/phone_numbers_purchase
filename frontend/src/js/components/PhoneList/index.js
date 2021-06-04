import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Table } from 'react-bootstrap'
import { PAGE_SIZE } from '../../settings'
import { getPhones } from '../../ducks/phoneListSlice'
import Paginator from '../Paginator'
import PhoneListItem from '../PhoneListItem'


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
      <PhoneListItem key={phone.id} item={phone}/>
    )
    phoneItems.push(phoneItem)
  }

  return (
    <Container>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Phone number</th>
          <th>Monthy price</th>
          <th>Setup price</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {phoneItems}
      </tbody>
      </Table>
      <Row>
        <Paginator
          pageIndex={1}
          pageSize={PAGE_SIZE}
          count={count}
          handleClick={handlePageClick}
        />
      </Row>
    </Container>
  )
}