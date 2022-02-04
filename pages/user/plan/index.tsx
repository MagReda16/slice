import React, { useState } from 'react'
import Link from 'next/link'
import DoughnutChart from '../../../components/DoughnutChart'
import NavButton from '../../../components/NavButton'
import RecipeList from '../../../components/RecipeList'
import { usePlan } from '../../../lib/hooks'
import { createPlan } from '../../../lib/methods/createPlan'


import styles from '../../../styles/Containers.module.css';
import stylesBtn from '../../../styles/Buttons.module.css'

const ViewPlan = () => {
  const { plan, isPlanLoading, planError } = usePlan()

  if (isPlanLoading) return <div>Loading....</div>

  if (planError) return <div>Some crazy stuff went wrong</div>

  return (
    <div className={styles.container}>
      <h1>This week's plan</h1>
      <DoughnutChart remainingBudget={300} amountSpent={100} />
      <Link href="/user/plan/edit" passHref>
        <NavButton className={stylesBtn.Btn2} type="button" children="Edit" />
      </Link>
      <Link href="/user/shoppinglist" passHref>
        <NavButton
          className={stylesBtn.Btn3}
          type="button"
          children="View my Shopping List"
        />
      </Link>
      <div>
        <RecipeList recipes={plan.recipes} btnType={''} />
      </div>
      <button className={`${stylesBtn.Btn3} ${stylesBtn.deletePlanBtn}`} onClick={() => {createPlan}}>Finished with this week!</button>
    </div>
  )
}

export default ViewPlan
