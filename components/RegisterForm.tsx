import { useState, FormEventHandler, FormEvent, ChangeEvent, ChangeEventHandler } from 'react';
import { useRouter } from 'next/router';
import { login, register } from '../lib/methods';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import stylesBtn from '../styles/Buttons.module.css';
import styles from '../styles/Forms.module.css';

const initialState: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const RegisterForm = () => {

  const router = useRouter();

  const [formData, setFormData] = useState(initialState);

  const handleChange: ChangeEventHandler = (e: ChangeEvent) => {
    const { name, value } = e.target as typeof e.target & {
      name: string,
      value: string
    };
    setFormData({ ...formData, [name]: value });
  }


  const handleSubmit: FormEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    toast.dismiss();
    if (formData.password !== formData.confirmPassword) {
      toast.info('Passwords must match!', {
        position: 'top-center',
        theme: 'colored',
        autoClose: 4000,
        draggable: false,
        hideProgressBar: true,
        closeOnClick: true,
        progress: undefined,
        transition: Slide
      })
    } else {
      try {
        await register({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password
        });
        const res = await login({ email: formData.email, password: formData.password });
        localStorage.setItem('accessToken', res.data.accessToken);
        router.push({ pathname: '/user/createbudget' });
        setFormData(initialState);
      } catch (e: any) {
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
    }
  }


  return (
    <>
      <ToastContainer />
      <form className={`${styles.form} ${styles.regForm}`} onSubmit={handleSubmit}>
        <input
          required
          className={styles.inputbox}
          autoComplete="off"
          placeholder="First name..."
          type="text"
          name="firstName"
          onChange={handleChange} />
        <input
          required
          className={styles.inputbox}
          autoComplete="off"
          placeholder="Last name..."
          type="text"
          name="lastName"
          onChange={handleChange} />
        <input
          required
          className={styles.inputbox}
          autoComplete="off"
          placeholder="Email..."
          type="email"
          name="email"
          onChange={handleChange} />
        <input
          required
          className={styles.inputbox}
          autoComplete="off"
          placeholder="Password..."
          type="password"
          name="password"
          onChange={handleChange} />
        <input
          required
          className={styles.inputbox}
          autoComplete="off"
          placeholder="Confirm password..."
          type="password"
          name="confirmPassword"
          onChange={handleChange} />
        <button className={`${stylesBtn.btn} ${stylesBtn.small}`} type="submit">Register</button>
      </form>
    </>
  )
}


export default RegisterForm;