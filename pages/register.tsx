import React from 'react';
import RegisterForm from '../components/RegisterForm';
import styles from '../styles/Containers.module.css';


const Register = () => {
  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <RegisterForm />
    </div>
    )
}

export default Register;