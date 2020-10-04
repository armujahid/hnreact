import NavBar from '../components/NavBar'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <div className="main-container">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />

        <title>HN React</title>
      </Head>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default App
