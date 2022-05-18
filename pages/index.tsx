import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Header, Footer } from 'components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MercadoCV | Ramon Irala</title>
        <meta name="description" content="MercadocCV de Ramon Irala" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Link href='/notasandbox'> Ir a panel test </Link>
      </main>

      <Footer />
    </>
  )
}

export default Home
