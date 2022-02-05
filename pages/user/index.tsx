import React from 'react';
import NavButton from '../../components/NavButton';
import Link from 'next/link';
import DoughnutChart from '../../components/DoughnutChart';
import styles from '../../styles/Settings.module.css';
import stylesBtn from '../../styles/Buttons.module.css';
import { useUser } from '../../lib/hooks';

const Dashboard = () => {

 const { user, isLoggedIn } = useUser();

 if (!isLoggedIn) return <div>...</div>

  return (
    
      <div className={styles.dashContainer}>
      <header className={styles.dashHeaderContainer}>
        <h1>Hello, {user.firstName}</h1>
        <DoughnutChart
        />
      </header>
      <div className={styles.dashButtonContainer}>
      <Link href='/user/plan' passHref>
        <NavButton
        className={`${stylesBtn.btn} ${stylesBtn.large}`}
        type='button'
        children="View this week's plan"
        />
      </Link>
      <Link href='/user/settings' passHref>
        <NavButton
        className={`${stylesBtn.btn} ${stylesBtn.large}`}
        type='button'
        children='Settings'
        />
      </Link>
      </div>
      </div>

  )
}

export default Dashboard;