import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Header, Footer, Product } from "components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MercadoCV | Ramon Irala</title>
        <meta name="description" content="MercadocCV de Ramon Irala" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Product />

      <Footer />
    </>
  );
};

export default Home;
