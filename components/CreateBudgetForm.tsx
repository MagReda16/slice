import React, {useState, FormEventHandler, FormEvent, ChangeEventHandler, ChangeEvent} from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Forms.module.css';
import stylesBtn from '../styles/Buttons.module.css';


const CreateBudgetForm = () => {
  const router = useRouter();

const [ budget, setBudget ] = useState({budget:''})

const handleChange: ChangeEventHandler = (e: ChangeEvent) => {
  const {name, value} = e.target as typeof e.target & {
    name: string,
    value: string
  };
  setBudget({...budget, [name] : value});
}

const handleSubmit: FormEventHandler = (e: FormEvent) => {
  e.preventDefault();
  router.push({pathname:'/dashboard'});
}

  return (
    <form className={`${styles.form} ${styles.budgetForm}`} onSubmit={handleSubmit}>
    <input
      required
      className={styles.inputbox}
      autoComplete="off"
      placeholder="Weekly budget..."
      type="number"
      name="budget"
      onChange={handleChange} />

    <button className={`${stylesBtn.Btn} ${stylesBtn.continueBtn}`} type="submit" value="Continue">Continue</button>
  </form>

  )
}

export default CreateBudgetForm;