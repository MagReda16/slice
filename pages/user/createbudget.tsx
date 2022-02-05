import React from 'react';
import CreateBudgetForm from '../../components/CreateBudgetForm';
import styles from '../../styles/Settings.module.css'


const CreateBudget = () => {
  return (
    <div className={styles.container}>
      <header className={styles.createBudgetHeader}>
        <h1>What is your weekly grocery budget?</h1>
        <h3>(You can always change this later)</h3>
      </header>
        <CreateBudgetForm isNew={true}/>
     
    </div>
  )
}

export default CreateBudget;