import React from 'react';
import CreateBudgetForm from '../../components/CreateBudgetForm';
import styles from '../../styles/Settings.module.css';
import stylesBtn from '../../styles/Buttons.module.css';

const Settings = () => {



  return (
    <div className={styles.container}>
      <header className={styles.updateSettingsHeader}>
        <h1>Weekly Budget</h1>
      </header>
      <CreateBudgetForm/>
      <button className={`${stylesBtn.Btn} ${stylesBtn.logoutBtn}`}>Logout</button>
    </div>
  )
}

export default Settings;