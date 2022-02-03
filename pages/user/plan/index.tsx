import React, { useState } from 'react'
import Link from 'next/link'
import DoughnutChart from '../../../components/DoughnutChart'
import NavButton from '../../../components/NavButton'
import RecipeList from '../../../components/RecipeList'
import { usePlan } from '../../../lib/hooks'
import styles from '../../../styles/Buttons.module.css'

const ViewPlan = () => {
  const { plan, isLoading, error } = usePlan()

  if (isLoading) return <div>Loading....</div>

  if (error) return <div>Some crazy stuff went wrong</div>

  return (
    <div>
      <h1>This week's plan</h1>
      <DoughnutChart remainingBudget={300} amountSpent={100} />
      <Link href="/user/plan/edit" passHref>
        <NavButton className={styles.loginBtn} type="button" children="Edit" />
      </Link>
      <Link href="/user/shoppinglist" passHref>
        <NavButton
          className={styles.loginBtn}
          type="button"
          children="View my Shopping List"
        />
      </Link>
      <div>
        <RecipeList recipes={plan.recipes} btnType={''} />
      </div>
    </div>
  )
}

export default ViewPlan
