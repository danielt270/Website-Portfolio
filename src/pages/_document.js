import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
//CUSTOM DOCUMENT THAT UPDATES THE HTML AND BODY TEXT THAT IS USED TO RENDER A PAGE
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Script id='theme-swticher' strategy='beforeInteractive'>
        {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        `}
      </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
