import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const router = useRouter()
  const [currentUrl, setCurrentUrl] = useState<string>();

  useEffect(() => {
    const host = window.location.host;
    setCurrentUrl(host);
  }, []);


  useEffect(() => {
    router.push("/cv")
  }, [router])

  return (
    <>
      <Head>
        <title>MercadoCV | Home</title>
        <meta name="description" content="MercadocCV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: 'grid', placeItems: 'center', height:'100vh', width:'100vw' }}>
        <p style={{ textAlign: 'center' }}>Redireccionando a <b>{currentUrl}/cv</b> , aguarde un segundo...</p>
      </div>
    </>
  )
};

export default Home;
