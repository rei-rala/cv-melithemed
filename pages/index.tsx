import type { NextPage } from 'next'
import Head from 'next/head'
import { COLORS, MEASURES } from 'styles/theme'

const saludar = () => alert('Hola mundo')

const Home: NextPage = () => {

  return (
    <div >
      <Head>
        <title>MercadoCV | Ramon Irala</title>
        <meta name="description" content="MercadocCV de Ramon Irala" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preload" href="/assets/fonts/proximanova-light.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/proximanova.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/proximanova-semibold.woff2" as="font" crossOrigin="" />
      </Head>

      <main>
        Hello World!

        <div>
          <p>Test</p>
          <button onClick={saludar}>
            Click me
            <style jsx>{`
            button {
              background: ${COLORS.blue};
              color: ${COLORS.white};
              padding: ${MEASURES.short};
              border: none;
              border-radius: ${MEASURES.radius};
              cursor: pointer;
            }

              button:hover {
                filter: brightness(0.9);
              }
          `}</style>
          </button>

          <button onClick={saludar}>
            Click me
            <style jsx>{`
            button {
              background: ${COLORS.blueAlt};
              color: ${COLORS.blue};
              padding: ${MEASURES.short};
              border: none;
              border-radius: ${MEASURES.radius};
              cursor: pointer;
            }

              button:hover {
                filter: brightness(0.9);
              }
          `}</style>
          </button>

          <span>
            {"Mas vendido".toUpperCase()}
            <style jsx>{`
            span {
              color: ${COLORS.white};
              background: ${COLORS.orange};
              padding: ${MEASURES.shortest};
              border-radius: ${MEASURES.radius};
            }
            `}</style>
          </span>

          <a href="#">Test
            <style jsx>{`
            a {
              color: ${COLORS.blue};
            }

            a:hover {
              text-decoration: underline;
            }
            `}</style>
          </a>
        </div>
      </main>

      <footer >
      </footer>

    </div>
  )
}

export default Home
