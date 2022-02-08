import DoughnutChart from "../../../components/DoughnutChart"
import NavButton from '../../../components/NavButton';
import Link from 'next/link';
import BarChart from "../../../components/BarChart";
import { usePlan } from "../../../lib/hooks";
import Spinner from "../../../components/Spinner";
import styles from '../../../styles/Breakdown.module.css'
import stylesBtn from '../../../styles/Buttons.module.css';

const Breakdown = () => {

const {plan, isPlanLoading} = usePlan();

if (isPlanLoading) return <Spinner />

  return (
    <div className={styles.container}>
       <Link href="/user">
        <NavButton
          className={stylesBtn.backArrowBtn}
          type="button"
          children="⬅"
        />
      </Link>
      <h1>Plan Breakdown</h1>
      <div className={styles.budgetContainer}>
        <h4>Budget:</h4>
        <p>Total Budget: $200</p>
        <p>Amount Spent: $41.04</p>
        <p>Amount Remaining: $158.96</p>
        
        <DoughnutChart/>
      </div>
      <div className={styles.nutrientContainer}>
        <h4>Nutritional Info:</h4>
        <p>per 1 serving of each recipe in your plan</p>
        <p>Total Calories: 560</p>
        <BarChart/>
      </div>

    </div>
  )

}

export default Breakdown;