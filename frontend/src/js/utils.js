export default function maskPhoneNumber (value) {
  value = value.replace(/\s*\+*\-*/g, '')
  let region = value.substring(0, 2)
  let ddd = value.substring(2,4)

  let number
  let number1 = value.substring(4,9)
  let number2 = value.substring(9, 13)
  
  if (number2) {
    number = `${number1}-${number2}`
  } else {
    number = `${number1}`
  }

  let maskedResult = `+${region} ${ddd} ${number}`
  maskedResult = maskedResult.trim()
  return maskedResult
}