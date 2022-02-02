import React, { useState } from 'react';
import Link from 'next/link';
import DoughnutChart from '../../../components/DoughnutChart';
import NavButton from '../../../components/NavButton';
import styles from '../../../styles/Buttons.module.css';


const ViewPlan = () => {

  return(
    <div>
      <h1>This week's plan</h1>
      <DoughnutChart
        remainingBudget={300}
        amountSpent={100} />
      <Link href='/user/plan/edit' passHref>
        <NavButton
        className={styles.loginBtn}
        type='button'
        children="Edit"
        /> 
      </Link>
      <Link href='/user/shoppinglist' passHref>
        <NavButton
        className={styles.loginBtn}
        type='button'
        children='View my Shopping List'
        /> 
      </Link>
      <div>
        {/* recipe items here */}
      </div>
    </div>
  )
}

export default ViewPlan;