import { currencies, languages } from './interfaces'

export const getCurrenciesString = (obj: currencies) => {
  let string = ''
  Object.keys(obj).map((item) => {
    string += obj[item].name + ' '
    return null
  })
  return string
}

export const getLanguagesString = (obj: languages) => {
  let string = ''
  Object.keys(obj).map((key: string, index: number) => {
    string += index !== 0 ? ', ' + obj[key] : obj[key]
  })
  return string
}
