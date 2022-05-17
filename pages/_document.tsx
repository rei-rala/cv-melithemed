import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='es'>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        
        <link rel="preload" href="/assets/fonts/proximanova-light.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/proximanova-regular.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/proximanova-semibold.woff2" as="font" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;