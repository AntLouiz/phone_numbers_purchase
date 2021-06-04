import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Modal, Table, Button } from 'react-bootstrap'
import { PAGE_SIZE } from '../../settings'
import { getPhones } from '../../ducks/phoneListSlice'
import Paginator from '../Paginator'
import PhoneListItem from '../PhoneListItem'


export default function PhoneList () {
  const {results, count} = useSelector((state) => state.phones)
  const [state, setState] = useState({showModal: false})
  const dispatch = useDispatch()

  if (!results.length) {
    dispatch(getPhones(1))
  }

  const handlePageClick = (page) => {
    dispatch(getPhones(page))
  }

  const showModal = (item) => {
    setState({showModal: true})
  }

  const closeModal = () => {
    setState({showModal: false})
  }

  let phoneItems = []
  for (let phone of results) {
    let phoneItem = <PhoneListItem key={phone.id} item={phone} handleClick={showModal}/>
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
      <Modal show={state.showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}