import Head from 'next/head'
import GlobalStyle from '../styles/global'

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
      <meta property='og:site_name' content='The Couch - Brooklyn Based Studio' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='The Couch - Brooklyn Based Studio' />
      <meta name='twitter:description' content="This isn't where I left my website?" />
      <meta name='twitter:url' content='https://thecouch.nyc/' />
      <link href='https://fonts.googleapis.com/css?family=Archivo+Black|Roboto+Mono' rel='stylesheet' />
      <meta name='twitter:image:src' content='https://s3.amazonaws.com/couchnyc/The_Couch.png' />
    </Head>
    <GlobalStyle />
    <style jsx>{`
      .header {
        width: 64px;
      }
      `}</style>
    <div>
      <a href='https://instagram.com/thecouch.nyc' target='_blank'><img className='header' src='/static/faces.gif' /></a>
      <p className='small pt2'>Hello world!</p>
    </div>
  </div>
)
