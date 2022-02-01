import React, { useState } from 'react';
import Link from 'next/link';
import DoughnutChart from '../components/DoughnutChart';
import NavButton from '../components/NavButton';
import styles from '../styles/Button.module.css'


const viewPlan = () => {
  //logic for 

  return(
    <div>
      <h1>This week's plan</h1>
      <DoughnutChart
        remainingBudget={300}
        amountSpent={100} />
      <Link href='/editPlan' passHref>
        <NavButton
        className={styles.dashboardBtn}
        type='button'
        children="Edit"
        /> 
      </Link>
      <Link href='/setting' passHref>
        <NavButton
        className={styles.dashboardBtn}
        type='button'
        children='View my Shopping List'
        /> 
      </Link>
    </div>
  )
}

export default viewPlan;