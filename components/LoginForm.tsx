import styles from '../styles/Button.module.css';
import React, {useState, FormEventHandler, FormEvent, ChangeEvent, ChangeEventHandler} from 'react';
import { useRouter } from 'next/router';


const LoginForm = () => {
  const router = useRouter();

//onSubmit -->  POST api/login, return accesstoken; GET api/user return user object

const [ formData, setFormData ] = useState({email: '', password: ''}) 

const handleChange: ChangeEventHandler = (e: ChangeEvent) => {
  const {name, value} = e.target as typeof e.target & {
    name: string,
    value: string
  };
  setFormData({...formData, [name]: value});
}
const handleSubmit: FormEventHandler = (e: FormEvent) => {
  e.preventDefault();
  router.push({pathname: '/dashboard'})
}

  return (
    <form onSubmit={handleSubmit}>
      <input 
        required
        autoComplete="off"
        placeholder="Email..."
        type="email"
        name="email"
        onChange={handleChange} />
      <input
        required
        autoComplete="off"
        placeholder="Password..."
        type="password"
        name="password" 
        onChange={handleChange} />
      <button type="submit" value="Login"/>
    </form>
  );
}

export default LoginForm;