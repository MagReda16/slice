import React from 'react';
import CreateBudgetForm from '../../components/CreateBudgetForm';
import styles from '../../styles/Containers.module.css';
import stylesFont from '../../styles/Fonts.module.css';
import stylesBtn from '../../styles/Buttons.module.css';

const Settings = () => {



  return (
    <div className={styles.container}>
      <h1 className={stylesFont.budgetText1}>Weekly Budget</h1>
      <CreateBudgetForm/>



      <button className={`${stylesBtn.Btn} ${stylesBtn.logoutBtn}`}>Logout</button>
    </div>
  )
}

export default Settings;