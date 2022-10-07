import { StateContextProvider } from '../context/StateContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateContextProvider>
      <Component {...pageProps} />
    </StateContextProvider>
  )
}

export default MyApp
