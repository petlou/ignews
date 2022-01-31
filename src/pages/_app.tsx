import type { AppProps } from 'next/app';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';

import { Header } from '../components/Header';

import '../styles/_global.scss';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <NextAuthProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
