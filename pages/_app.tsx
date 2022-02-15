import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';


import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <UserProvider>
      <Head>
        <title>Slice App</title>
        <meta property="og:title" content="My page title" key="Slice" />
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
}
