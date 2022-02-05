import { usePlan } from '../../../lib/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import buttonStyles from '../../../styles/Buttons.module.css';
import styles from '../../../styles/EditPlan.module.css';
import NavButton from '../../../components/NavButton';
import RecipeList from '../../../components/RecipeList';
import DoughnutChart from '../../../components/DoughnutChart';

const EditPlan = () => {
  const { plan, isPlanLoading } = usePlan();

  const router = useRouter();

  if (isPlanLoading) return <div>Loading</div>;

  return (
    <div className={styles.container}>
      <div className={styles.titleBar}>
        <Link href="/user/plan">
          <NavButton
            className={buttonStyles.backArrowBtn}
            type="button"
            children="⬅"
          />
        </Link>
        <h1>Edit my Plan</h1>
      </div>
      <DoughnutChart />
      <button
        className={`${buttonStyles.btn} ${buttonStyles.small} ${styles.btn}`}
        type="button"
        onClick={() => router.push('/user/plan/searchrecipes')}
      >
        Add recipe
      </button>
      <RecipeList recipes={plan.recipes} btnType={'subtract'} />
      <Link href="/user/plan" passHref>
        <NavButton
          className={`${buttonStyles.btn} ${buttonStyles.small} ${styles.btn}`}
          type="button"
          children="Confirm"
        />
      </Link>
    </div>
  );
};

export default EditPlan;
