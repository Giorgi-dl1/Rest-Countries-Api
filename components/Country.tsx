import React from 'react'
import { CountryComponent } from '../interfaces'

const Country = ({ country }: CountryComponent) => {
  const {
    region,
    capital,
    name,
    population,
    flags: { svg: flag },
  } = country
  return (
    <div className="w-[16rem] shadow-md cursor-pointer pb-6 hover:shadow-xl transition duration-300 bg-light-elements dark:bg-dark-elements text-light-text dark:text-dark-text rounded-md overflow-hidden">
      <img
        src={flag}
        alt="flag"
        className="object-cover w-full transition h-[155px]"
      />
      <div className="p-3">
        <h3 className="mb-3 text-lg font-bold">{name.common}</h3>
        <p>
          <span>Population:</span> {population}
        </p>
        <p className="py-1">
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </div>
    </div>
  )
}

export default Country
