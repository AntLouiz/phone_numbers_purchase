import React, { useState } from 'react'
import './Paginator.scss'
import { Pagination } from 'react-bootstrap'


export default function Paginator (props) {
  const pageIndex = props.pageIndex
  const totalPages = props.totalPages
  const handleClick = props.handleClick

  const defaultState = {active: pageIndex}
  const [state, setState] = useState(defaultState)

  let pages
  let items = []

  const handleItemClick = (page) => {
    setState({active: page})
    handleClick(page)
  }

  const integersRange = (start, end) => {
    let range = []
    for (let index = start; index < end; index++) {
      range.push(index)
    }
    return new Set(range)
  }

  if (totalPages <= 10) {
    pages = integersRange(1, totalPages)
  } else {
    let initialRange = integersRange(1, 4)
    let middleRange = integersRange(Math.max(1, state.active - 2), Math.min(state.active + 3, totalPages + 1))
    let endRange = integersRange(totalPages - 2, totalPages+1)

    pages = new Set([...initialRange, ...middleRange, ...endRange])
  }

  const createPaginationItem = (page) => {
    let paginationItem = (
      <Pagination.Item
        key={page}
        active={page == state.active}
        activeLabel={null}
        onClick={() => handleItemClick(page)}
      >
        {page}
      </Pagination.Item>
    )

    return paginationItem
  }

  function* getPaginationWithElipsis (pageSet) {
    let lastPage = 0

    for (let page of pageSet) {
      if (page != lastPage + 1) {
        let elipsisElement = <Pagination.Ellipsis key={lastPage + 1}/>
        yield elipsisElement
      }

      if (page == state.active) {
        let currentPageLink = createPaginationItem(page, true) 
        yield currentPageLink
      } else {
        let pageLink = createPaginationItem(page) 
        yield pageLink
      }

      lastPage = page
    }
  }

  let pagination = getPaginationWithElipsis(pages)
  for (let pageLink of pagination) {
    items.push(pageLink)
  }

  let isFirstIndex = state.active == 1
  let isLastIndex = state.active == totalPages
  let next = state.active + 1 <= totalPages? state.active + 1: state.active
  let prev = state.active - 1 >= 1? state.active - 1: state.active

  return (
    <Pagination>
      <Pagination.First
        disabled={isFirstIndex}
        onClick={() => handleItemClick(1)}
      />
      <Pagination.Prev
        disabled={isFirstIndex}
        onClick={() => handleItemClick(prev)}
      />
        {items}
      <Pagination.Next
        disabled={isLastIndex}
        onClick={() => handleItemClick(next)}
      />
      <Pagination.Last
        disabled={isLastIndex}
        onClick={() => handleItemClick(totalPages)}
      />
    </Pagination>
  )
}