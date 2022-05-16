import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='es'>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;