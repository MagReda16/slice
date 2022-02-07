import { usePlan } from "../../../../lib/hooks";
import Spinner from "../../../../components/Spinner";
import Link from "next/link";
import NavButton from "../../../../components/NavButton";
import stylesBtn from '../../../../styles/Buttons.module.css';
import styles from '../../../../styles/History.module.css';
import RecipeList from "../../../../components/RecipeList";


const Plan = () => {
  const { plan, isPlanLoading } = usePlan();
  if (isPlanLoading) return <Spinner />

  return (
    <div className={styles.container}>
      <Link href='/user/plan/history'>
        <NavButton
          className={stylesBtn.backArrowBtn}
          type='button'
          children='⬅'
        />
      </Link>
      <h1>Week of 1/4</h1>
      <div className={styles.cost}>
        <h3>Total cost:</h3>
        <p>${Math.round(plan.totalPlanCost * 100)/100}</p>
      </div>
      <h3 className={styles.recipes}>Recipes:</h3>
      <RecipeList recipes={plan.recipes} btnType={''} />
    </div>
  );
};

export default Plan;
