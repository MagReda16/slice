import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import stylesBtn from '../styles/Buttons.module.css';
import Head from 'next/head';
import Link from 'next/link';
import NavButton from '../components/NavButton';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.slice}>Slice</h1>
      <h4>Meal planning & budgeting</h4>

      <div className={styles.loginContainer}>
        <Link href='/oAuthLogin' passHref>
          <NavButton
            className={stylesBtn.loginWithOauthBtn}
            type='button'
            children='Login with Gmail'
          />
        </Link>
        <Link href='/emaillogin' passHref>
          <NavButton
            className={stylesBtn.loginWithEmailBtn}
            type='button'
            children='Login with email'
          />
        </Link>
      </div>

      <Link href='/register'>
        <button className={stylesBtn.regBtn}>New here? Register</button>
      </Link>
    </div>
  );
};

export default Home;
