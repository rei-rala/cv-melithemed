import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Header, Footer, ProductMain } from "components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MercadoCV | Ramon Irala</title>
        <meta name="description" content="MercadocCV de Ramon Irala" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <ProductMain />


      <section style={{textAlign:'center'}}>
        <Link href="/notasandbox"> Ir a panel test </Link>
      </section>

      <Footer />
    </>
  );
};

export default Home;
