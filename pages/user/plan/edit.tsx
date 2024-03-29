import { usePlan, useUser } from '../../../lib/hooks';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavButton from '../../../components/NavButton';
import RecipeList from '../../../components/RecipeList';
import DoughnutChart from '../../../components/DoughnutChart';
import Spinner from '../../../components/Spinner';
import stylesBtn from '../../../styles/Buttons.module.css';
import styles from '../../../styles/EditPlan.module.css';
import { ToastContainer } from 'react-toastify';

const EditPlan = () => {
  const { isUserLoading } = useUser()
  const { plan, isPlanLoading } = usePlan();
  const router = useRouter();

  if (isPlanLoading || isUserLoading) return <Spinner />

  const handleClick = () => {
    localStorage.removeItem('searchdata');
  }


  return (
    <div className={styles.container}>
      <ToastContainer />
      <button onClick={() => { router.push('/user/plan') }} className={stylesBtn.backArrowBtn}>
        <Image src='/back_arrow.svg' alt='Back button' width={45} height={45} />
      </button>
      <h1>Edit my Plan</h1>
      <DoughnutChart />
      <button
        className={`${stylesBtn.btn} ${stylesBtn.small} ${stylesBtn.narrow}`}
        type="button"
        onClick={() => router.push('/user/plan/searchrecipes')}
      >
        Add recipe
      </button>
      {plan.recipes.length === 0 && <div className={styles.noRecipes}>
        <p>No recipes yet!</p>
      </div>}
      <RecipeList recipes={plan.recipes} btnType={'edit'} />
      {plan.recipes.length !== 0 &&
        <Link href="/user/plan" passHref>
          <NavButton
            className={`${stylesBtn.btn} ${stylesBtn.small} ${stylesBtn.secondary} ${styles.btn}`}
            type="button"
            children="Confirm"
            onClick={handleClick}
          />
        </Link>}
    </div>
  );
};

export default EditPlan;
