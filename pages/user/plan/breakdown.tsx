import Link from 'next/link';
import { usePlan, useUser } from "../../../lib/hooks";
import { useRouter } from 'next/router';
import Spinner from "../../../components/Spinner";
import NavButton from '../../../components/NavButton';
import BarChart from "../../../components/BarChart";
import DoughnutChart from "../../../components/DoughnutChart"
import { calcNutrients } from '../../../lib/helpers';
import Image from 'next/image';
import styles from '../../../styles/Breakdown.module.css'
import stylesBtn from '../../../styles/Buttons.module.css';

const Breakdown = () => {
  const router = useRouter();
  const { plan, isPlanLoading } = usePlan();
  const { user, isUserLoading } = useUser();

  if (isPlanLoading || isUserLoading) return <Spinner />


  const dispalyInfo = () => {
    if (plan.recipes.length === 0) {
      return <div className={styles.noRecipes}>No recipes yet! Add some to see your plan breakdown</div>
    } else {
      const totalBudget = user.budget.toFixed(0);
      const amountSpent = plan.totalPlanCost.toFixed(2);
      const remaining = (user.budget - plan.totalPlanCost).toFixed(2);

      const res = calcNutrients(plan.recipes);
      const planCalories = res.Calories.amount.toFixed(0);
      return <>
        <div className={styles.budgetContainer}>
          <h4>Budget</h4>
          <div className={styles.budgetInfo}>
            <p><span>Total Budget</span>: ${totalBudget}</p>
            <p><span>Amount Spent</span>: ${amountSpent}</p>
            <p><span>Amount Remaining</span>: ${remaining}</p>
          </div>
          <DoughnutChart />
        </div>
        <div className={styles.nutrientContainer}>
          <h4>Nutritional Info</h4>
          <p>Based on 1 serving of each recipe in your plan</p>
          <p><span>Total Calories</span>: {planCalories}</p>
          <BarChart />
        </div>
      </>
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={() => { router.back() }} className={stylesBtn.backArrowBtn}>
        <Image src='/back_arrow.svg' alt='Back button' width={45} height={45} />
      </button>
      <h1>Plan Breakdown</h1>
      {dispalyInfo()}
    </div>
  )

}

export default Breakdown;