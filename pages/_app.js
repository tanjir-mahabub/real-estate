import { ChakraProvider } from '@chakra-ui/react'
import Router from 'next/router'
import Head from 'next/head'
import nProgress from 'nprogress'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  nProgress.configure({ showSpinner: false })
  
  Router.events.on('routeChangeStart', () => {
    nProgress.start()
  })

  Router.events.on('routeChangeComplete', () => {
    nProgress.done()
  })

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" integrity="sha512-DanfxWBasQtq+RtkNAEDTdX4Q6BPCJQ/kexi/RftcP0BcA4NIJPSi7i31Vl+Yl5OCfgZkdJmCqz+byTOIIRboQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
    <ChakraProvider>
     <Layout>
      <Component {...pageProps} />
     </Layout>
    </ChakraProvider>
    </>
  )
}

export default MyApp