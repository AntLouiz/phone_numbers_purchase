import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Row, Table } from 'react-bootstrap'
import { setFetching, setAlert, setPhones, postItem, setLoading } from '../../ducks/phonesSlice'
import { postPhone, getPhones } from '../../api/phones'
import { PAGE_SIZE } from '../../settings'
import Paginator from '../Paginator'
import PhoneListItem from '../PhoneListItem'
import PhoneModal from '../PhoneModal'
import Loader from '../Loader'


export default function PhoneList (props) {
  const {results, count, isEdition} = props
  const [state, setState] = useState({showModal: true, isLoading: false})
  const dispatch = useDispatch()

  let phoneItems = []
  for (let phone of results) {
    let phoneItem = (
      <PhoneListItem key={phone.id} item={phone} isEdition={isEdition}/>
    )
    phoneItems.push(phoneItem)
  }

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
    <tbody>
      {phoneItems}
    </tbody>
    </Table>
  )

  const submitItem = (item) => {
    dispatch(setFetching(true))

    const handleSuccess = (message, data) => {
      setState({...state, showModal: false})
      dispatch(postItem(data))
      dispatch(setAlert({message: message, severity: 'success'}))
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
      setState({showModal: false, isLoading: false})
    }

    const handleError = (data) => {
      console.log(data)
      console.log("Erro")
      setState({showModal: false, isLoading: false})
    }
    getPhones({pageIndex: page}, handleSuccess, handleError)
  }

  return (
    <Container>
      <PhoneModal
        buttonText={'Create'}
        buttonClass={'btn-success'}
        submitModal={submitItem}
        showModal={state.showModal}
      />
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