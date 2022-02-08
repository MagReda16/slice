import { usePlan } from '../../../lib/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavButton from '../../../components/NavButton';
import RecipeList from '../../../components/RecipeList';
import DoughnutChart from '../../../components/DoughnutChart';
import Spinner from '../../../components/Spinner';
import buttonStyles from '../../../styles/Buttons.module.css';
import styles from '../../../styles/EditPlan.module.css';

const EditPlan = () => {
  const { plan, isPlanLoading } = usePlan();
  const router = useRouter();

  if (isPlanLoading) return <Spinner />
  console.log(plan.recipes)


  return (
    <div className={styles.container}>
      <Link href="/user/plan">
        <NavButton
          className={buttonStyles.backArrowBtn}
          type="button"
          children="⬅"
        />
      </Link>
      <h1>Edit my Plan</h1>
      <DoughnutChart />
      <button
        className={`${buttonStyles.btn} ${buttonStyles.small} ${buttonStyles.narrow}`}
        type="button"
        onClick={() => router.push('/user/plan/searchrecipes')}
      >
        Add recipe
      </button>
      {plan.recipes.length === 0 && <div className={styles.noRecipes}>
          <p>No recipes yet!</p>
        </div>}
      <RecipeList recipes={plan.recipes} btnType={'edit'} />
      <Link href="/user/plan" passHref>
        <NavButton
          className={`${buttonStyles.btn} ${buttonStyles.small} ${buttonStyles.secondary} ${styles.btn}`}
          type="button"
          children="Confirm"
        />
      </Link>
    </div>
  );
};

export default EditPlan;
