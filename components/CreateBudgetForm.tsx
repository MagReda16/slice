import React, {useState, FormEventHandler, FormEvent, ChangeEventHandler, ChangeEvent} from 'react';
import { useRouter } from 'next/router';
import { updateUser } from '../lib/methods';
import { useUser } from '../lib/hooks';
import styles from '../styles/Forms.module.css';
import stylesBtn from '../styles/Buttons.module.css';

const initialState = {budget: ''}

type CreateBudgetFormProps ={
  isNew?: boolean
}

const CreateBudgetForm = ({isNew}: CreateBudgetFormProps) => {
  const router = useRouter();

  const [ budget, setBudget ] = useState(initialState)

const handleChange: ChangeEventHandler = (e: ChangeEvent) => {
  const {name, value} = e.target as typeof e.target & {
    name: string,
    value: string
  };
  setBudget({...budget, [name] : value});
}

const handleSubmit: FormEventHandler = (e: FormEvent) => {
  e.preventDefault();
  updateUser(budget);
  setBudget(initialState);
  if (isNew) router.push('/user')
}
const { user, isLoggedIn } = useUser();

if (!isLoggedIn) return <div>...</div>

console.log(user.user.budget);

  return (
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

    <button className={`${stylesBtn.Btn} ${stylesBtn.continueBtn}`} type="submit" value="Continue">Continue</button>
  </form>

  )
}

export default CreateBudgetForm;