import React from 'react'

export type currencies = {
  [key: string]: {
    name: string
    symbol: string
  }
}

export type languages = {
  [key: string]: string
}

export type country = {
  name: {
    common: string
    nativeName: any[]
  }
  nativeName: string
  subregion: string
  topLevelDomain: string[]
  region: string
  population: number
  capital: string
  alpha3Code: string
  borders: string[]
  tld: string[]
  currencies: currencies
  languages: languages
  flags: {
    svg: string
  }
}

export interface Home {
  countries: country[]
}

export interface CountryComponent {
  country: country
}

export interface Layout {
  children: React.ReactNode
}

export interface Header {
  dark: boolean
  toggleDark: () => void
}

export interface Form {
  activeRegion?: string
}

export interface CountryList {
  region?: string
  countries: country[]
}
