import { MouseEventHandler } from "react";
import DoughnutChart from "./DoughnutChart";
import styles from '../styles/Buttons.module.css';
import Link from 'next/link';

import RecipeList from './RecipeList';
import { Recipe } from '../db/types';
import NavButton from '../components/NavButton';


type ShowEditPlanProps = {
  toggleSearch: MouseEventHandler,
  recipes: Recipe[],
}

const ShowEditPlan = ({ recipes, toggleSearch }: ShowEditPlanProps) => {



  return (
    <>
      <h1>Edit my Plan</h1>
      <DoughnutChart
        remainingBudget={300}
        amountSpent={100}
      />
      <button className={styles.loginBtn} type='button' onClick={toggleSearch}>Add recipe</button>
      <RecipeList recipes={recipes} btnType={'subtract'}  />
      <Link href='/user/plan' passHref>
        <NavButton
          className={styles.Btn}
          type='button'
          children='Confirm'
        />
      </Link>

    </>
  )
}

export default ShowEditPlan;