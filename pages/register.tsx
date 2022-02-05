import React from 'react';
import RegisterForm from '../components/RegisterForm';
import styles from '../styles/Login.module.css';


const Register = () => {
  return (
    <div className={styles.container}>
      <header className={styles.registerHeader}>
        <h1>SLICE</h1>
      </header>
       <RegisterForm />
    </div>
    )
}

export default Register;