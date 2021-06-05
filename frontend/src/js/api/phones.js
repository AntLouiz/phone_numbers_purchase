export function getPhones (payload, handleSuccess, handleError) {
  const { pageIndex } = payload
  let url = `/api/phones/?page=${pageIndex}`

  let request = fetch(url)

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