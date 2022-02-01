import React from 'react';
import NavButton from '../components/NavButton';
import Link from 'next/link';
import DoughnutChart from '../components/DoughnutChart';
import styles from '../styles/Button.module.css';

const Dashboard = () => {

  const number1 = 750
  const number2 = 12


  return (
    <div>
      <h1>Hello Santiago</h1>
      <DoughnutChart 
        remainingBudget={number1}
        amountSpent={number2}
      />
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