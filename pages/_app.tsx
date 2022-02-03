import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import useUser 

// this is for additional stuff, not needed at the moment, but good to keep in mind
// array of site pages that user shouldnt see if loggedIn
// is useEffect if array includes router.pathname and isLoggedIn then router.push to /dashboard??
// in dependecy of useEffect add router.pathname and isLoggedIn


// call for the hook useUser=> check if localStorage.getItem('accessToken') exists => fetch user data // handle the error (if error remove accessToken from localStorage) 
// Auth context props = user, isLoggedIn(bool), 

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
