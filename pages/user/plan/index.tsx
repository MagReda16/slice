import React, { useState } from 'react'
import Link from 'next/link'
import DoughnutChart from '../../../components/DoughnutChart'
import NavButton from '../../../components/NavButton'
import RecipeList from '../../../components/RecipeList'
import { usePlan } from '../../../lib/hooks'
import Spinner from '../../../components/Spinner'
import stylesBtn from '../../../styles/Buttons.module.css';
import styles from '../../../styles/EditPlan.module.css';

const ViewPlan = () => {
  const { plan, isPlanLoading, planError, createNewPlan } = usePlan()

  if (isPlanLoading) return <Spinner />

  if (planError) return <div>Some crazy stuff went wrong</div>

  return (

    <div className={styles.container}>
      <Link href='/user'>
        <NavButton
          className={`${stylesBtn.backArrowBtn} ${styles.arrow}}`}
          type='button'
          children='⬅'
        />
      </Link>
      <h1>This week's plan</h1>
      <DoughnutChart />
      <div className={styles.viewPlanBtnContainer}>
        <Link href="/user/plan/edit" passHref>
          <NavButton className={`${stylesBtn.btn} ${stylesBtn.small} ${stylesBtn.editPlanBtn}`} type="button" children="Edit" />
        </Link>
        <Link href="/user/shoppinglist" passHref>
          <NavButton
            className={`${stylesBtn.btn} ${stylesBtn.medium} ${stylesBtn.editPlanBtn}`}
            type="button"
            children="View my Shopping List"
          />
        </Link>
      </div>
      <RecipeList recipes={plan.recipes} btnType={''} />
      <button className={`${stylesBtn.btn} ${stylesBtn.medium} $`} onClick={() => createNewPlan()}>Finished with this week!</button>
    </div>
  )
}

export default ViewPlan
