import React, { useState, FormEventHandler, FormEvent, ChangeEventHandler, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../lib/hooks';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styles from '../styles/Forms.module.css';
import stylesBtn from '../styles/Buttons.module.css';

const initialState = { budget: '' }

type CreateBudgetFormProps = {
  isNew?: boolean
}

const CreateBudgetForm = ({ isNew }: CreateBudgetFormProps) => {
  const router = useRouter();
  const { user, updateUserInfo, isLoggedIn } = useUser();

  const [budget, setBudget] = useState(initialState)

  const handleChange: ChangeEventHandler = (e: ChangeEvent) => {
    const { name, value } = e.target as typeof e.target & {
      name: string,
      value: string
    };
    setBudget({ ...budget, [name]: value });
  }

  const handleSubmit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();
    if (updateUserInfo) updateUserInfo(budget)
    setBudget(initialState);
    if (isNew) router.push('/user');
    toast.success('Budget updated!', {
      position: 'top-center',
      theme: 'light',
      autoClose: 1000,
      draggable: false,
      hideProgressBar: true,
      closeOnClick: true,
      progress: undefined,
      transition: Slide
    })
  }

  if (!isLoggedIn) return <div>...</div>

  return (
    <>
      <ToastContainer />
      <form className={`${styles.form} ${styles.budgetForm}`} onSubmit={handleSubmit}>
        <input
          required
          className={styles.inputbox}
          autoComplete="off"
          placeholder="Weekly budget..."
          type="number"
          name="budget"
          value={budget.budget}
          onChange={handleChange} />
        <button className={`${stylesBtn.btn} ${stylesBtn.small}`} type="submit" value="Continue">Continue</button>
      </form>
    </>
  )
}

export default CreateBudgetForm;