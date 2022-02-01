import React, {useState} from 'react';
import DoughnutChart from '../components/DoughnutChart';
import styles from '../styles/Button.module.css'

const editPlan = () => {

  return (
    <div>
      <h1>Edit my Plan</h1>

      <DoughnutChart 
        remainingBudget={300}
        amountSpent={100}/>
      <button className={styles.loginBtn} type='button'>Add recipe</button>
      <div>
        {/* added recipes here */}
      </div>
      <button className={styles.loginBtn} type='submit'>Confirm plan</button>
    </div>
  )
}

export default editPlan;