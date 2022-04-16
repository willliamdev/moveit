import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
