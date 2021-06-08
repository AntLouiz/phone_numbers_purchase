import React from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import { PAGE_SIZE } from '../../settings'
import Paginator from '../Paginator'
import PhoneListItem from '../PhoneListItem'
import PhoneModal from '../PhoneModal'


export default function PhoneList (props) {
  const {results, count, handlePageClick, isEdition} = props

  let phoneItems = []
  for (let phone of results) {
    let phoneItem = (
      <PhoneListItem key={phone.id} item={phone} isEdition={isEdition}/>
    )
    phoneItems.push(phoneItem)
  }

  const submitItem = (item) => {
    dispatch(setFetching(true))

    const handleSuccess = (message, data) => {
      setState({showModal: false})
      dispatch(purchaseItem(item))
      dispatch(setAlert({message: message, severity: 'success'}))
    }
    const handleError = (message, error) => console.log(error)

    postPhone(item, handleSuccess, handleError)
  }

  return (
    <Container>
      <PhoneModal
        buttonText={'Create'}
        buttonClass={'btn-success'}
        submitModal={submitItem}
      />
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