import {
  useState,
  FormEventHandler,
  FormEvent,
  ChangeEvent,
  ChangeEventHandler,
} from 'react';
import { useRouter } from 'next/router';
import { login } from '../lib/methods';
import styles from '../styles/Forms.module.css';
import stylesBtn from '../styles/Buttons.module.css';


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

  const handleSubmit: FormEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      localStorage.setItem('accessToken', res.data.accessToken);
      router.push('/user');
      setFormData(initialState);
    } catch (e: any) {
      console.log(e.response.data.message);
      // create a better error display
      alert(e.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${styles.loginForm}`}>
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
      <button className={`${stylesBtn.btn} ${stylesBtn.small}`} type='submit' value='Login'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
