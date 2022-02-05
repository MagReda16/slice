import React from 'react';
import CreateBudgetForm from '../../components/CreateBudgetForm';
import styles from '../../styles/Settings.module.css';
import stylesBtn from '../../styles/Buttons.module.css';
import Link from 'next/link';
import NavButton from '../../components/NavButton';

const Settings = () => {

  return (
    <div className={styles.wrapper}>
        <Link href='/user'>
          <NavButton
          className={`${stylesBtn.backArrowBtn} ${styles.arrow}`}
          type='button'
          children='⬅'
        />
        </Link>
    <div className={styles.container}>
        <header className={styles.updateSettingsHeader}>
          <h1>Weekly Budget</h1>
        </header>
        <CreateBudgetForm/>
      <button className={`${stylesBtn.btn} ${stylesBtn.secondary} ${stylesBtn.small}`}>Logout</button>
    </div>
    </div>
  )
}

export default Settings;