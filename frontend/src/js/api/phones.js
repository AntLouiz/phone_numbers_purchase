import { getPaginatedPhones } from '../../__mocks__/phonesMock'

function getPhones (payload, handleSuccess, handleError) {
  const { pageIndex } = payload
  let url = `/api/phones/?page=${pageIndex}`
  // let request = getPaginatedPhones(payload)

  let request = fetch(url)

  request.then((response) => {
    return response.json()
  }).then((data) => {
    handleSuccess(data)
  }).catch((error) => handleError(error))
}

export default getPhones