import { useRouter } from 'next/router'
import Country from '../../../components/Country'
import Form from '../../../components/Form'
import { Home } from '../../../interfaces'

const index = ({ countries }: Home) => {
  const router = useRouter()
  const { region } = router.query
  return (
    <div className="min-h-screen">
      <Form activeRegion={region?.toString()} />
      <div className="justify-center md:justify-between custom-grid">
        {countries.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  )
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
