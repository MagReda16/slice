import React, {FormEventHandler, FormEvent, ChangeEvent, } from 'react';
import styles from '../styles/Button.module.css';



const LoginForm = () => {

//onSubmit -->  POST api/login, return accesstoken; GET api/user return user object

  return (
    <form>
      <input 
        required
        autoComplete="off"
        placeholder="Email..."
        type="email"
        name="email" />
      <input
        required
        autoComplete="off"
        placeholder="Password..."
        type="password"
        name="password" />
      <button type="submit" value="Login"/>
    </form>
  );
}

export default LoginForm;