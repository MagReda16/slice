import { MouseEventHandler } from 'react';
import DoughnutChart from './DoughnutChart';
import Link from 'next/link';
import RecipeList from './RecipeList';
import { Recipe } from '../db/types';
import NavButton from '../components/NavButton';
import styles from '../styles/EditPlan.module.css';
import buttonStyles from '../styles/Buttons.module.css';
import containerStyles from '../styles/Containers.module.css';

type ShowEditPlanProps = {
  toggleSearch: MouseEventHandler;
  recipes: Recipe[];
};

const ShowEditPlan = ({ recipes, toggleSearch }: ShowEditPlanProps) => {
  return (
    <div className={containerStyles.container}>
      <h1>Edit my Plan</h1>
      <DoughnutChart />
      <button
        className={`${buttonStyles.btn} ${buttonStyles.small} ${styles.btn}`}
        type="button"
        onClick={toggleSearch}
      >
        Add recipe
      </button>
      <RecipeList recipes={recipes} btnType={'subtract'} />
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

export default ShowEditPlan;
