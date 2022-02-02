import styles from '../styles/Forms.module.css';
import stylesBtn from '../styles/Buttons.module.css';
import React, {
  useState,
  FormEventHandler,
  FormEvent,
  ChangeEvent,
  ChangeEventHandler,
} from 'react';
import { useRouter } from 'next/router';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const router = useRouter();

  //onSubmit -->  POST api/login, return accesstoken; GET api/user return user object

  const [formData, setFormData] = useState(initialState);

  const handleChange: ChangeEventHandler = (e: ChangeEvent) => {
    const { name, value } = e.target as typeof e.target & {
      name: string;
      value: string;
    };
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();
    router.push({ pathname: '/dashboard' });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        required
        autoComplete='off'
        placeholder='Email...'
        type='email'
        name='email'
        onChange={handleChange}
        className={styles.inputbox}
      />
      <input
        required
        autoComplete='off'
        placeholder='Password...'
        type='password'
        name='password'
        onChange={handleChange}
        className={styles.inputbox}
      />
      <button className={stylesBtn.Btn} type='submit' value='Login'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
