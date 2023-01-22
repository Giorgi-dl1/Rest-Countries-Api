import React from 'react';
import { CountryComponent } from '../interfaces';

const Country = ({ country }: CountryComponent) => {
  const {
    region,
    capital,
    name,
    population,
    flags: { svg: flag },
  } = country;
  return (
    <div>
      <div>
        <img src={flag} alt="flag" />
      </div>
      <div>
        <h3>{name.common}</h3>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

export default Country;
