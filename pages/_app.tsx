import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Router from 'next/router'
import Loading from '../components/Loading'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const start = () => {
      console.log('start')
      setLoading(true)
    }
    const end = () => {
      console.log('finished')
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  )
}

export default MyApp
