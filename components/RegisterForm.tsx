import React, {useState, FormEventHandler, FormEvent, ChangeEvent, ChangeEventHandler} from 'react';
import { useRouter } from 'next/router';
import stylesBtn from '../styles/Buttons.module.css';
import styles from '../styles/Forms.module.css';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const RegisterForm = () => {

const router = useRouter();

//onSubmit --> POST api/login, return accesstoken, POST api/register, GET api/user
const [ formData, setFormData ] = useState(initialState)

const handleChange: ChangeEventHandler = (e: ChangeEvent) => {
  const {name, value} = e.target as typeof e.target & {
    name: string,
    value: string
  };
  setFormData({...formData, [name]: value});
}


const handleSubmit: FormEventHandler = (e: FormEvent) => {
  e.preventDefault();
  if(formData.password !== formData.confirmPassword) {
    alert('Passwords must match!')
  } else {
    router.push({ pathname: '/createBudget'})
  }
}


  return (

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
        onChange={handleChange}  />
      <input
        required
        className={styles.inputbox}
        autoComplete="off"
        placeholder="Confirm password..."
        type="password"
        name="confirmPassword"
        onChange={handleChange}  />
      <button className={`${stylesBtn.Btn} ${stylesBtn.registerBtn}`} type="submit">Register</button>
  </form>


  )
}


export default RegisterForm;