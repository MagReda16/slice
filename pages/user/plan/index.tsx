import React, { useState } from 'react'
import Link from 'next/link'
import DoughnutChart from '../../../components/DoughnutChart'
import NavButton from '../../../components/NavButton'
import RecipeList from '../../../components/RecipeList'
import { usePlan } from '../../../lib/hooks'
import stylesBtn from '../../../styles/Buttons.module.css';
import styles from '../../../styles/EditPlan.module.css';

const ViewPlan = () => {
  const { plan, isPlanLoading, planError, createNewPlan } = usePlan()

  if (isPlanLoading) return <div>Loading....</div>

  if (planError) return <div>Some crazy stuff went wrong</div>

  return (
    <div className={styles.container}>
      <div className={styles.titleBar}>
        <Link href='/user'>
          <NavButton
          className={stylesBtn.backArrowBtn}
          type='button'
          children='⬅'
        />
        </Link>
        <h1>This week's plan</h1>
      </div>
      <DoughnutChart />
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
      <RecipeList recipes={plan.recipes} btnType={''} />
      <button className={`${stylesBtn.Btn3} ${stylesBtn.deletePlanBtn}`} onClick={() => {createNewPlan}}>Finished with this week!</button>
    </div>
  )
}

export default ViewPlan
