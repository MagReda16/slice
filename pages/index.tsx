import type { NextPage } from 'next';
import styles from '../styles/Login.module.css';
import stylesBtn from '../styles/Buttons.module.css';
import Head from 'next/head';
import Link from 'next/link';
import NavButton from '../components/NavButton';

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.mainHeader}>
        <h1>SLICE</h1>
        <h4>Meal planning & budgeting</h4>
      </header>
      <div className={styles.mainLoginContainer}>
        <Link href='/oAuthLogin' passHref>
          <NavButton
            className={stylesBtn.loginWithOauthBtn}
            type='button'
            children='Login with Gmail'
          />
        </Link>
        <Link href='/emailLogin' passHref>
          <NavButton
            className={stylesBtn.loginWithEmailBtn}
            type='button'
            children='Login with email'
          />
        </Link>
      <Link href='/register'>
        <button className={stylesBtn.regBtn}>New here? Register</button>
      </Link>
      </div>
    </div>
  );
};

export default Home;
