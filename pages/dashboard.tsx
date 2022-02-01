import React from 'react';
import NavButton from '../components/NavButton';
import Link from 'next/link';
import DoughnutChart from '../components/DoughnutChart';
import styles from '../styles/Button.module.css';

const Dashboard = () => {
  return (
    <div>
      <h1>Hello Santiago</h1>
      <DoughnutChart />
      <Link href='/viewPlan' passHref>
        <NavButton
        className={styles.dashboardBtn}
        type='button'
        children="View this week's plan"
        /> 
      </Link>
      <Link href='/setting' passHref>
        <NavButton
        className={styles.dashboardBtn}
        type='button'
        children='Settings'
        /> 
      </Link>
    </div>
  )
}

export default Dashboard;