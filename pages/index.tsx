import Country from '../components/Country'
import Form from '../components/Form'
import { Home } from '../interfaces'

const Home = ({ countries }: Home) => {
  console.log(countries)
  return (
    <div>
      <Form />
      {countries.map((country) => (
        <Country country={country} />
      ))}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const countries = await fetch(
    'https://restcountries.com/v3.1/all',
  ).then((res) => res.json())
  return {
    props: {
      countries,
    },
  }
}
