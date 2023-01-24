import { country } from '../../../interfaces'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { getCurrenciesString, getLanguagesString } from '../../../utils'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
const index = ({ country }: { country: country }) => {
  const router = useRouter()
  const redirect: string | undefined | string[] = router.query.redirect

  const nativeName = Object?.values(country?.name?.nativeName)[0].common

  const currenciesString = country.currencies
    ? getCurrenciesString(country.currencies)
    : 'Not found'

  const languagesString = country.languages
    ? getLanguagesString(country.languages)
    : 'Not found'

  return (
    <div className="max-w-[1550px] lg:mx-auto">
      <div className="mt-10 mb-16 text-sm md:text-base md:my-20 max-w-max">
        <Link href={redirect ? redirect.toString() : '/'}>
          <div className="flex items-center gap-3 px-8 py-2 rounded bg-light-elements custom-shadow max-w-max dark:bg-dark-elements">
            <AiOutlineArrowLeft />
            <p>Back</p>
          </div>
        </Link>
      </div>
      <div className="lg:pb-7 lg:min-w-[500px] lg:flex-wrap lg:gap-10 lg:flex lg:justify-between">
        <div className="w-full lg:min-w-[500px] h-[50vw] min-h-[100px] relative lg:flex-1 max-w-[600px] md:h-[350px] max-h-[400px]">
          <Image
            src={country?.flags?.svg}
            alt="flag"
            className="object-cover"
            fill
            priority
            sizes="100%"
          />
        </div>

        <div className="lg:flex-1">
          <h1 className="my-8 text-xl font-bold">{country?.name?.common}</h1>
          <div className="space-y-6 md:space-y-0 md:flex w-full lg:gap-20 md:max-w-[700px] md:justify-between">
            <div className="space-y-1 md:space-y-2 lg:space-y-3">
              <p>
                <strong>Native Name: </strong> {nativeName}
              </p>
              <p>
                <strong>Population: </strong> {country?.population}
              </p>
              <p>
                <strong>Region: </strong> {country?.region}
              </p>
              <p>
                <strong>Sub Region: </strong> {country?.subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {country?.capital ? country?.capital[0] : 'Not found'}
              </p>
            </div>
            <div className="space-y-1 md:space-y-2 lg:space-y-3">
              <p>
                <strong>Top Level Domain: </strong> {country?.tld[0]}
              </p>
              <p>
                <strong>Currencies: </strong> {currenciesString}
              </p>
              <p>
                <strong>Languages :</strong> {languagesString}
              </p>
            </div>
          </div>
          <div className="py-6">
            <div className="flex flex-col gap-4 md:flex-row">
              <strong>Border Countries:</strong>
              <div className="flex flex-wrap gap-2">
                {country.borders ? (
                  country.borders.map((item) => (
                    <span
                      className="px-6 py-[2px] rounded custom-shadow bg-light-elements dark:bg-dark-elements"
                      key={item}
                    >
                      {item}
                    </span>
                  ))
                ) : (
                  <span>Not found</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${context.params.name}?fullText=true`,
  )
  const countryArr = await res.json()
  const country = countryArr[0]
  return {
    props: {
      country,
    },
  }
}

export const getStaticPaths = async () => {
  const countries = await fetch(
    `https://restcountries.com/v3.1/all`,
  ).then((res) => res.json())

  const names = countries.map((country: country) => country.name.common)
  const paths = names.map((name: string) => ({
    params: {
      name,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
