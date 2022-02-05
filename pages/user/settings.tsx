import React from 'react';
import CreateBudgetForm from '../../components/CreateBudgetForm';
import styles from '../../styles/Settings.module.css';
import stylesBtn from '../../styles/Buttons.module.css';
import Link from 'next/link';
import NavButton from '../../components/NavButton';

const Settings = () => {

  return (
    <div className={styles.container}>
      <div className={styles.titleBar}>
        <Link href='/user'>
          <NavButton
          className={stylesBtn.backArrowBtn}
          type='button'
          children='⬅'
        />
        </Link>
        <header className={styles.updateSettingsHeader}>
          <h1>Weekly Budget</h1>
        </header>
      </div>
      <CreateBudgetForm/>
      <button className={`${stylesBtn.Btn} ${stylesBtn.logoutBtn}`}>Logout</button>
    </div>
  )
}

export default Settings;