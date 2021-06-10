import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { setFetching, setAlert, setPhones, postItem, setLoading } from '../../ducks/phonesSlice'
import { postPhone, getPhones } from '../../api/phones'
import { PAGE_SIZE } from '../../settings'
import Paginator from '../Paginator'
import PhoneListItem from '../PhoneListItem'
import PhoneModal from '../PhoneModal'
import Loader from '../Loader'
import './PhoneList.scss'


export default function PhoneList (props) {
  const {results, count, isEdition} = props
  const [state, setState] = useState({isLoading: false})
  const dispatch = useDispatch()

  let phoneItems = []
  for (let phone of results) {
    let phoneItem = (
      <PhoneListItem key={phone.id} item={phone} isEdition={isEdition}/>
    )
    phoneItems.push(phoneItem)
  }

  let emptyMessage = (
    <Row>
      <Col className="empty-msg">Phones not found</Col>
    </Row>
  )

  let phonesTableList = (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Phone number</th>
        <th>Monthy price</th>
        <th>Setup price</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>{phoneItems}</tbody>
    </Table>
  )

  const submitItem = (item, handleClose) => {
    dispatch(setFetching(true))

    const handleSuccess = (message, data) => {
      dispatch(postItem(data))
      dispatch(setAlert({message: message, severity: 'success'}))
      handleClose()
    }
    const handleError = (message, error) => console.log(error)

    postPhone(item, handleSuccess, handleError)
  }

  const handlePageClick = (page) => {

    dispatch(setFetching(true))
    setState({...state, isLoading: true})
    const handleSuccess = (data) => {
      dispatch(setLoading(false))
      dispatch(setFetching(false))
      dispatch(setPhones(data))
      setState({isLoading: false})
    }

    const handleError = (data) => {
      console.log(data)
      console.log("Erro")
      setState({isLoading: false})
    }
    getPhones({pageIndex: page}, handleSuccess, handleError)
  }

  const createPhoneModalButton = (
    <PhoneModal
      buttonText={'Create'}
      buttonClass={'btn-success'}
      submitModal={submitItem}
    />
  )

  phonesTableList = phoneItems.length? phonesTableList: emptyMessage

  return (
    <Container>
      {createPhoneModalButton}
      {state.isLoading? <Row><Loader /></Row>: phonesTableList}
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