import React from 'react';
import CreateBudgetForm from '../../components/CreateBudgetForm';
import Link from 'next/link';
import { logout } from '../../lib/methods';
import NavButton from '../../components/NavButton';
import styles from '../../styles/Settings.module.css';
import stylesBtn from '../../styles/Buttons.module.css';
import {useRouter} from 'next/router';

const Settings = () => {

  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  }

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
        <CreateBudgetForm />
        <button className={`${stylesBtn.btn} ${stylesBtn.secondary} ${stylesBtn.small}`} onClick={handleLogout}>Logout</button>
        <a href="/api/auth/logout">Logout</a>
      </div>
    </div>
  )
}

export default Settings;