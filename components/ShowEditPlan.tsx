import { MouseEventHandler } from "react";
import DoughnutChart from "./DoughnutChart";
import styles from '../styles/Buttons.module.css';

type ShowEditPlanProps = {
  toggleSearch: MouseEventHandler
}

const ShowEditPlan = ({ toggleSearch }: ShowEditPlanProps) => {
  return (
    <>
      <h1>Edit my Plan</h1>
      <DoughnutChart
        remainingBudget={300}
        amountSpent={100}
      />
      <button className={styles.loginBtn} type='button' onClick={toggleSearch}>Add recipe</button>
      <button className={styles.loginBtn} type='submit'>Confirm plan</button>
    </>
  )
}

export default ShowEditPlan;