import Head from 'next/head'
import CountryList from '../components/CountryList'
import { Home } from '../interfaces'

const Home = ({ countries }: Home) => {
  return (
    <>
      <Head>
        <title>Rest Countries Api</title>
      </Head>
      <CountryList countries={countries} />
    </>
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
