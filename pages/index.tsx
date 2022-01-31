import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import NavButton from '../components/NavButton';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Slice</title>
      </Head>
      <h2>Meal planning & budgeting</h2>
      <Link href='/emailLogin' passHref>
        <NavButton
        className={styles.loginWithEmailBtn}
        type='button'
        children='Login with email'
        /> 
      </Link>
      <Link href='/register'>New here? Register</Link>
    </div>
  )
}

export default Home; 