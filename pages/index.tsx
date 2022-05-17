import type { NextPage } from 'next'
import Head from 'next/head'
import Header from 'components/header/Header'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>MercadoCV | Ramon Irala</title>
        <meta name="description" content="MercadocCV de Ramon Irala" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
      <Link href='/notasandbox'> Ir a panel test </Link>

      </main>

      <footer >
      </footer>

    </div>
  )
}

export default Home
