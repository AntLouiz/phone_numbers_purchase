function getPhones (payload, handleSuccess, handleError) {
  const { pageIndex } = payload
  let url = `/api/phones/?page=${pageIndex}`

  let request = fetch(url)

  request.then((response) => {
    return response.json()
  }).then((data) => {
    handleSuccess(data)
  }).catch((error) => handleError(error))
}

export default getPhones