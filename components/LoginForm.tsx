import {
  useState,
  FormEventHandler,
  FormEvent,
  ChangeEvent,
  ChangeEventHandler,
} from 'react';
import { useRouter } from 'next/router';
import { login } from '../lib/methods';
import { toast, ToastContainer, Zoom, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styles from '../styles/Forms.module.css';
import stylesBtn from '../styles/Buttons.module.css';


const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const router = useRouter();

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
    toast.dismiss()
    // toast('is it working??');
    try {
      const res = await login(formData);
      localStorage.setItem('accessToken', res.data.accessToken);
      router.push('/user');
      setFormData(initialState);
    } catch (e: any) {
      console.log(e.response.data.message);
      // create a better error display
      // alert(e.response.data.message);
      toast.error(e.response.data.message, {
        position: 'top-center',
        theme: 'colored',
        autoClose: false,
        draggable: false,
        hideProgressBar: true,
        closeOnClick: true,
        progress: undefined,
        transition: Slide
      })
    }
  };

  return (
    <>
    <ToastContainer />
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
    </>
  );
};

export default LoginForm;
