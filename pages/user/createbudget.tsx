import React from 'react';
import CreateBudgetForm from '../../components/CreateBudgetForm';
import styles from '../../styles/Containers.module.css'
import stylesFont from '../../styles/Fonts.module.css'


const CreateBudget = () => {
  return (
    <div className={styles.container}>
      <h1 className={stylesFont.budgetText1}>What is your weekly grocery budget?</h1>
      <CreateBudgetForm/>
      <h3 className={stylesFont.fadeText}>(You can always change this later)</h3>
    </div>
  )
}

export default CreateBudget;