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


export function postPhone (payload, handleSuccess, handleError) {
  const postData = {
    'monthyPrice': payload.monthyPrice,
    'currency': payload.currency,
    'setupPrice': payload.setupPrice,
    'value': payload.value,
    'isPurchased': false,
    'isActive': true
  }

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  let url = '/api/phones/'
  let request = fetch(url, requestOptions)

  request.then((response) => {
    return response.json()
  }).then((data) => {
    let message = "Phone Number registered successful."
    handleSuccess(message, data)
  }).catch((error) => handleError(error))
}

export function updatePhone (payload, handleSuccess, handleError) {
  const { id } = payload
  let url = `/api/phones/${id}/`
  const requestOptions = {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  let request = fetch(url, requestOptions)

  request.then((response) => {
    return response.json()
  }).then((data) => {
    handleSuccess('Updated successful', data)
  }).catch((error) => handleError('Error occurred', error))
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
    handleSuccess('Removed successful', data)
  }).catch((error) => handleError('Error occurred', data))
}