import type { NextPage } from 'next';
import styles from '../styles/Login.module.css';
import stylesBtn from '../styles/Buttons.module.css';
import Head from 'next/head';
import Link from 'next/link';
import NavButton from '../components/NavButton';
import { useUser } from '@auth0/nextjs-auth0';

const Home = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>
  if(error) return <div>{error.message}</div>
  console.log('THIS IS USER 🥺', user)
  return (
    <div className={styles.container}>
      <header className={styles.mainHeader}>
        <h1>{user && user.email}</h1>
        <h1>SLICE</h1>
        <h4>Meal planning & budgeting</h4>
      </header>
      <div className={styles.mainLoginContainer}>
      <a href="/api/auth/logout">Logout</a>
      <a href="/api/auth/login">Login</a>
        <Link href='/api/auth/login' passHref>
          <NavButton
            className={`${stylesBtn.btn} ${stylesBtn.login}`}
            type='button'
            children='Login with Gmail'
          />
        </Link>
        <Link href='/emailLogin' passHref>
          <NavButton
            className={`${stylesBtn.btn} ${stylesBtn.login}`}
            type='button'
            children='Login with email'
          />
        </Link>
      <Link href='/register'>
        <button className={stylesBtn.register}>New here? Register</button>
      </Link>
      </div>
    </div>
  );
};

export default Home;
