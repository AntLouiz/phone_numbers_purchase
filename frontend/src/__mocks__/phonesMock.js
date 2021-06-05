import { PAGE_SIZE } from '../js/settings'


export function getMockedPhone (index=1) {
  let phone = {
    "id": index,
    "value": `+55 84 91234-432${index}`,
    "monthyPrice": `0.1${index}`,
    "setupPrice": `${index}.40`,
    "currency": "BRL$"
  }
  return phone
}

function getMockedPhones () {
  let phones = []

  for (let index = 1; index <= 800; index++) {
    let phone = getMockedPhone(index)
    phones.push(phone)
  }

  return phones
}

export function getPaginatedPhones (page, requestTime=2000) {
  let mockedPhones = getMockedPhones()
  let count = mockedPhones.length
  let paginatedPhones = mockedPhones.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const response = {
    results: paginatedPhones,
    count: count,
    next: null,
    prev: null
  }

  let promise = new Promise(
    function(resolve) {
      window.setTimeout(() => {
        resolve(response)
      }, requestTime)
    }
  )

  return promise
}
