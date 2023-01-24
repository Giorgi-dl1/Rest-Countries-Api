import React from 'react'

export type country = {
  name: {
    common: string
  }
  nativeName: string
  subregion: string
  topLevelDomain: string[]
  region: string
  population: number
  capital: string
  alpha3Code: string
  currencies: {
    name: string
  }[]
  languages: {
    name: string
  }[]
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
