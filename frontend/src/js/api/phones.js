import { getPaginatedPhones } from '../../__mocks__/phonesMock'

function getPhones (payload, handleSuccess, handleError) {
  let request = getPaginatedPhones(payload)
  request.then((data) => {
    handleSuccess(data)
  }).catch((error) => handleError(error))
}

export default getPhones