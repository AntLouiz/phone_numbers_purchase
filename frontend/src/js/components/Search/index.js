import React, { useCallback, useState } from 'react'
import {Form, FormControl, Button, InputGroup} from 'react-bootstrap'
import { debounce } from 'lodash'
import './Search.scss'

export default function Search (props) {
  const { handleSearch } = props
  const [state, setState] = useState({text: ""})

  const handleDebounce = useCallback(debounce(handleSearch, 250), [])

  const handleChange = (event) => {
    let searchText = event.target.value
    setState({text: searchText})
    handleDebounce(searchText)
  }

  const handleClear = () => {
    let mockedEvent = {target: {value: ""}}
    handleChange(mockedEvent)
  }

  return (
    <Form className="d-flex">
      <InputGroup className="mb-3">
      <FormControl
        type="search"
        placeholder="Search phone numbers"
        className="mr-2"
        aria-label="Search"
        value={state.text}
        onChange={handleChange}
      />
      <Button
        className="clear-btn"
        variant="outline-success"
        onClick={handleClear}
      >
        x
      </Button>
    </InputGroup>
    </Form>
  )
}