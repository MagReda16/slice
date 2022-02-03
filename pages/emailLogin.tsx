import React from 'react';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Containers.module.css';

// import useUser hook
// conditionally check in useEffect to redirect to /user
// React.useEffect(() => {
//   if (isLoggedIn) Router.push('/')
// }, [isLoggedIn])

const EmailLogin = () => {
  return (
    <div className={styles.container}>
      <h1>Slice</h1>
      <h4>Meal planning & budgeting</h4>
      <LoginForm />
    </div>
  );
};

export default EmailLogin;
