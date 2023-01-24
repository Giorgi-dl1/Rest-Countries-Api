import { useRouter } from 'next/router'
import CountryList from '../../../components/CountryList'
import { Home } from '../../../interfaces'

const index = ({ countries }: Home) => {
  const router = useRouter()
  const { region } = router.query
  return <CountryList countries={countries} region={region?.toString()} />
}

export default index

export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/region/${context.params.region}`,
  )
  const countries = await res.json()
  return {
    props: {
      countries,
    },
  }
}

export const getStaticPaths = async () => {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  const paths = regions.map((region) => ({
    params: {
      region,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
