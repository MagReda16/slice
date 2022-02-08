import React from 'react';
import NavButton from '../../components/NavButton';
import Link from 'next/link';
import DoughnutChart from '../../components/DoughnutChart';
import { usePlan, useUser } from '../../lib/hooks';
import Spinner from '../../components/Spinner';
import styles from '../../styles/Settings.module.css';
import stylesBtn from '../../styles/Buttons.module.css';


const Dashboard = () => {

  const { user, isUserLoading, isLoggedIn } = useUser();
  const { isPlanLoading } = usePlan();

  if (isUserLoading || isPlanLoading) return <Spinner />

  return (

    <div className={styles.dashContainer}>
      <header className={styles.dashHeaderContainer}>
        <h1>Hello, {user.firstName}</h1>
        <p className={styles.weeklyBudget}>Your weekly budget</p>
        <DoughnutChart
        isMain={true}
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