import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', textAlign: 'center' }}>
        <p>Redireccionando a <Link href='/cv'><a><b>{currentUrl}/cv</b></a></Link></p>  <p> Aguarde un segundo...</p>
      </div>
    </>
  )
};

export default Home;
