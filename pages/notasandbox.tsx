import Button from 'components/Button'
import Header from 'components/header/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import { COLORS, MEASURES, Variant, VARIANTS } from 'styles/theme'

import styles from 'styles/test.module.css'
import Link from 'next/link'

const Home: NextPage = () => {

  const [showingHeader, setShowingHeader] = useState(true)
  const toggleShowingHeader = () => setShowingHeader(!showingHeader)

  const [showingBtns, setShowingBtns] = useState(false)
  const toggleDisplayBtns = () => setShowingBtns(!showingBtns)

  return (
    <div >
      <Head>
        <title>MercadoCV | Testpage</title>
        <meta name="description" content="MercadocCV de Ramon Irala" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href='/'> Ir a home </Link>

      <main className={styles.main}>
        <fieldset >
          <legend>
            <Button onClick={toggleShowingHeader} >{showingHeader ? 'Ocultar ' : 'Mostrar '} header</Button>
          </legend>

          <div style={{ display: showingHeader ? 'flex' : 'none' }}>
            <Header />
          </div>
        </fieldset>

        <fieldset >
          <legend>
            <Button onClick={toggleDisplayBtns}>{showingBtns ? 'Ocultar ' : 'Mostrar '} botones</Button>
          </legend>

          <div style={{ display: showingBtns ? 'flex' : 'none' }}>
            {/* TODO make this work
            {Object.keys(VARIANTS).map((variant) => <Button key={`btn-v${variant}`} variant={variant}>{variant}</Button>)} 
            */}
          </div>
        </fieldset>

        <fieldset >
          <legend>
            <Button>Misc</Button>
          </legend>
          <span>
            {"Mas vendidos".toUpperCase()}
            <style jsx>{`
            span {
              color: ${COLORS.white};
              background: ${COLORS.orange};
              padding: ${MEASURES.padding};
              border-radius: ${MEASURES.radius};
            }
            `}</style>
          </span>
        </fieldset >

        <fieldset>
          <legend>
            <Button>Links</Button>
          </legend>

          <div>
            <a href="#">Normal</a>
            <a href="#" className='hover'>Hovered</a>
          </div>
        </fieldset>

      </main>

    </div>
  )
}

export default Home
