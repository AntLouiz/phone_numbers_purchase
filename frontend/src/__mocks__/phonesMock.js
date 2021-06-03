function getMockedPhones () {
  let phones = []

  for (let index = 1; index <= 800; index++) {
    let phone = {
      "id": index,
      "value": `+55 84 91234-432${index}`,
      "monthyPrice": `0.1${index}`,
      "setupPrice": `${index}.40`,
      "currency": "BRL$"
    }
    phones.push(phone)
  }

  return phones
}

export default getMockedPhones
