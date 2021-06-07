import { getPaginatedPhones } from '../../__mocks__/phonesMock'

export function getPhones (payload, handleSuccess, handleError) {
  const { pageIndex, search } = payload
  let url = "/api/phones/"

  if (pageIndex) {
    url = `${url}?page=${pageIndex}`
  }

  if (search) {
    url = `${url}?search=${search}`
  }

  // let request = fetch(url)
  let request = Promise.resolve({json: () => Promise.resolve(getPaginatedPhones(pageIndex, 1))})

  request.then((response) => {
    return response.json()
  }).then((data) => {
    handleSuccess(data)
  }).catch((error) => handleError(error))
}


export function getPurchasedPhones (payload, handleSuccess, handleError) {
  const { pageIndex, search } = payload
  let url = "/api/phones/purchases/"

  if (pageIndex) {
    url = `${url}?page=${pageIndex}`
  }

  if (search) {
    url = `${url}?search=${search}`
  }

  let request = fetch(url)
  // let request = Promise.resolve({json: () => Promise.resolve(getPaginatedPhones(pageIndex, 1))})

  request.then((response) => {
    return response.json()
  }).then((data) => {
    handleSuccess(data)
  }).catch((error) => handleError(error))
}

export function purchasePhone (payload, handleSuccess, handleError) {
  const { id } = payload
  let url = `/api/phones/${id}/`
  const requestOptions = {
    method: 'PATCH',
    body: JSON.stringify({'isPurchased': true, 'id': id}),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  let request = fetch(url, requestOptions)

  request.then((response) => {
    return response.json()
  }).then((data) => {
    handleSuccess(data)
  }).catch((error) => handleError(error))
}

export function removePhone (payload, handleSuccess, handleError) {
  const { id } = payload
  let url = `/api/phones/${id}/`
  const requestOptions = {
    method: 'DELETE',
    body: JSON.stringify({'id': id}),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  let request = fetch(url, requestOptions)

  request.then((response) => {
    return response.json()
  }).then((data) => {
    handleSuccess(data)
  }).catch((error) => handleError(error))
}