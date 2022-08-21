import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppWrapper } from '../context/state'
import { AppWrapper2 } from '../context/stateTwo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <AppWrapper2>
        <Component {...pageProps} />
      </AppWrapper2>
    </AppWrapper>
  )
}

export default MyApp
