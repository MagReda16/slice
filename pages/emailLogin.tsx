import React from 'react';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Containers.module.css';

const emailLogin = () => {
  return (
    <div className={styles.container}>
      <h1>Slice</h1>
      <h4>Meal planning & budgeting</h4>
      <LoginForm />
    </div>
  );
};

export default emailLogin;
