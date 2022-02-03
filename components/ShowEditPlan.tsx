import { MouseEventHandler } from "react";
import DoughnutChart from "./DoughnutChart";
import styles from '../styles/Buttons.module.css';
import RecipeList from './RecipeList';
import { Recipe } from '../db/types';
import { usePlan } from '../lib/hooks/usePlan';

type ShowEditPlanProps = {
  toggleSearch: MouseEventHandler,
  recipes: Recipe[],
}

const ShowEditPlan = ({ recipes, toggleSearch }: ShowEditPlanProps) => {

  const { confirmPlan } = usePlan();


  return (
    <>
      <h1>Edit my Plan</h1>
      <DoughnutChart
        remainingBudget={300}
        amountSpent={100}
      />
      <button className={styles.loginBtn} type='button' onClick={toggleSearch}>Add recipe</button>
      <RecipeList recipes={recipes} btnType={'subtract'}  />
      <button className={styles.loginBtn} type='submit' onClick={() => {confirm()}}>Confirm plan</button>
    </>
  )
}

export default ShowEditPlan;