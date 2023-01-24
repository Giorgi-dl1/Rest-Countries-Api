import Form from '../components/Form'
import Country from '../components/Country'
import { CountryList } from '../interfaces'

const CountryList = ({ countries, region }: CountryList) => {
  return (
    <div className="min-h-screen pb-8 max-w-[1550px] lg:mx-auto">
      <Form activeRegion={region?.toString()} />
      {!countries.length ? (
        <div className="mt-4 text-lg font-bold text-center md:mt-6 ">
          Country not found
        </div>
      ) : (
        <div className="justify-center custom-grid">
          {countries?.map((country) => (
            <Country key={country.name.common} country={country} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CountryList
