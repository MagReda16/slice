import React, {useState} from 'react';
import DoughnutChart from '../components/DoughnutChart';
import styles from '../styles/Button.module.css'

const editPlan = () => {

  const [isSearching, setIsSearching ] = useState(false)

  const handleClick = () => {
  setIsSearching(!isSearching);
  }

  return (
    <div>
      {!isSearching && 
      <><h1>Edit my Plan</h1>
      <DoughnutChart
          remainingBudget={300}
          amountSpent={100} />
        <button className={styles.loginBtn} type='submit'>Confirm plan</button></>}
        <button className={styles.loginBtn} type='button' onClick={handleClick}>Add recipe</button>
    </div>
  )
}

export default editPlan;