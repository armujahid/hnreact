import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
    return (
        <div className="main-container">
            <Head>
                <title>HN React</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <NavBar />
            <div className="container">
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp