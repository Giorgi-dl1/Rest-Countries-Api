import CountryList from '../../../components/CountryList'
import { Home } from '../../../interfaces'

const index = ({ countries }: Home) => {
  return <CountryList countries={countries} />
}

export default index

export const getServerSideProps = async (context: any) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${context.params.name}`,
  )
  const countries = (await res.json()) || []
  return {
    props: {
      countries,
    },
  }
}
