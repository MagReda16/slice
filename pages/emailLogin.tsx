import React from 'react';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Login.module.css';

// import useUser hook
// conditionally check in useEffect to redirect to /user
// React.useEffect(() => {
//   if (isLoggedIn) Router.push('/')
// }, [isLoggedIn])

const EmailLogin = () => {
  return (
    <div className={styles.container}>
      <header className={styles.mainHeader}>
      <h1>SLICE</h1>
      <h4>Meal planning & budgeting</h4>
    </header>
    <div className={styles.emailLoginContainer}>
      <LoginForm />
    </div>
    </div>
  );
};

export default EmailLogin;
