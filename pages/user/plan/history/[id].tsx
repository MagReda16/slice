import Link from "next/link";
import { useRouter } from "next/router";
import moment from "moment";
import { usePlan } from "../../../../lib/hooks";
import Spinner from "../../../../components/Spinner";
import NavButton from "../../../../components/NavButton";
import RecipeList from "../../../../components/RecipeList";
import stylesBtn from '../../../../styles/Buttons.module.css';
import styles from '../../../../styles/History.module.css';


const Plan = () => {
  const router = useRouter();
  const { plan, planError, isPlanLoading } = usePlan();
  if (isPlanLoading) return <Spinner />

  if (planError) {
    router.push('/user/plan/history');
    return null
  }

  return (
    <div className={styles.container}>
      <Link href='/user/plan/history'>
        <NavButton
          className={stylesBtn.backArrowBtn}
          type='button'
          children='⬅'
        />
      </Link>
      <h1>Week of {moment(plan.createdAt).format('MMM Do')}</h1>
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
