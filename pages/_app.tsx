import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useUser } from '../lib/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
// this is for additional stuff, not needed at the moment, but good to keep in mind
// array of site pages that user shouldnt see if loggedIn
// is useEffect if array includes router.pathname and isLoggedIn then router.push to /dashboard??
// in dependecy of useEffect add router.pathname and isLoggedIn


// call for the hook useUser=> check if localStorage.getItem('accessToken') exists => fetch user data // handle the error (if error remove accessToken from localStorage)
// Auth context props = user, isLoggedIn(bool),

const loggedPagesToHide = ['/emailLogin', '/register', '/', '/user/createbudget'];
const notLoggedPagesToHide = ['/user', '/user/settings', '/user/shoppinglist', '/user/plan', '/user/plan/edit'];

export default function MyApp({ Component, pageProps }: AppProps) {
  const {isUserLoading, isLoggedIn} = useUser();
  const router = useRouter();
  // useEffect(() => {
  //   if (!isUserLoading) {
  //     if (isLoggedIn && loggedPagesToHide.includes(router.pathname)) {
  //       router.push('/user');
  //     }
  //   }
  //   if (isUserLoading && !isLoggedIn) {
  //     if (notLoggedPagesToHide.includes(router.pathname)) {
  //       router.push('/emailLogin');
  //     }
  //   }
  // }, [router.pathname, isLoggedIn])
  // console.log('islogged in from the app', isLoggedIn);
  return (
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
  );
}
