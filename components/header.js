import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>The Couch - Brooklyn Based Studio</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content="This isn't where I left my website?" />
      <meta name='keywords' content='digital studio, development, graphic design, branding, web development, app development, start ups' />
      <meta name='og:url' content='https://thecouch.nyc/' />
      <meta name='fragment' content='!' />
      <meta http-equiv='Accept-CH' content='DPR, Width, Viewport-Width' />
      <meta name='og:image' content='https://s3.amazonaws.com/couchnyc/The_Couch.png' />
      <meta property='og:locale' content='en_US' />
      <link rel='shortcut icon' href='/static/favicon.gif' />
      <meta property='og:site_name' content='The Couch - NYC Studio' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='The Couch - NYC Studio' />
      <meta name='twitter:description' content="This isn't where I left my website?" />
      <meta name='twitter:url' content='https://thecouch.nyc/' />
      <link href="https://fonts.googleapis.com/css?family=Archivo+Black|Roboto+Mono" rel="stylesheet" />
      <meta name='twitter:image:src' content='https://s3.amazonaws.com/couchnyc/The_Couch.png' />
    </Head>
    <style global jsx>{`
      body, html {
        background: #021993;
        font-family: 'Roboto Mono', monospace;
        color: white;
        padding: 0;
        margin: 0;
      }
      .layout {
        padding: 40px;
      }
      h1 {
        font-family: 'Archivo Black', sans-serif;
        font-weight: 400;
        font-size: 32px;
        line-height: 1.1;
        margin: 14px 0;
      }
      @media (min-width: 45em) {
        h1 {
          font-size: 54px;
          margin: 24px 0;
          line-height: 1;
        }
        .layout {
          padding: 80px;
        }
      }
      @media (min-width: 50em) {
        h1 {
          margin: 40px 0;
          font-size: 72px;
          line-height: .9;
        }
      }
      .fit-a {
        top: 0; left: 0; bottom: 0; right: 0;
      }
      fill-a {
        height: 100%;
        width: 100%;
      }
      .px2 {
        padding: 2rem;
      }
      .abs {
        position: absolute;
      }
      .f {
        display: flex;
      }
      .caps {
        text-transform: uppercase;
      }
      .jce {
        justify-content: flex-end;
      }
      .jcs {
        justify-content: flex-start;
      }
      .jcc {
        justify-content: center;
      }
      .aie {
        align-items: flex-end;
      }
      .aic {
        align-items: center;
      }
      .mha {
        margin: 0 auto;
      }
      svg {
        width: calc(100vw - 4rem);
        height: calc((100vw - 4rem) / 3.2);
      }
      .z1 {
        z-index: 10;
      }
      .wrapper {
        max-width: 950px;
      }
      a {
        text-decoration: none;
        transition: all .25s;
        color: white;
      }
      a:hover {

      }
      p, a {
        font-family: 'Roboto Mono', monospace;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      p.small a, p.small {
        font-size: 13px;
      }
      @media (min-width: 30em) {
        p.small, p.small a {
          font-size: 16px;
        }
      }
      `}</style>
    <style jsx>{`
      .header {
        max-width: 60px;
      }
      `}</style>
    <div>
      <img className='header' src='/static/icon/TV.png' />
      <p>Hello world!</p>
    </div>
  </div>
)
