import { MouseEventHandler } from "react";
import DoughnutChart from "./DoughnutChart";
import stylesBtn from '../styles/Buttons.module.css';
import stylesContainer from '../styles/Containers.module.css'
import Link from 'next/link';

import RecipeList from './RecipeList';
import { Recipe } from '../db/types';
import NavButton from '../components/NavButton';


type ShowEditPlanProps = {
  toggleSearch: MouseEventHandler,
  recipes: Recipe[],
}

const ShowEditPlan = ({ recipes, toggleSearch }: ShowEditPlanProps) => {



  return (
    <div className={stylesContainer.container}>
       <Link href='/user/plan'>
        <NavButton
        className={stylesBtn.backArrowBtn}
        type='button'
        children='⬅'
      />
      </Link>
      <h1>Edit my Plan</h1>
      <DoughnutChart />
      <button className={stylesBtn.Btn} type='button' onClick={toggleSearch}>Add recipe</button>
      <RecipeList recipes={recipes} btnType={'subtract'} />
      <Link href='/user/plan' passHref>
        <NavButton
          className={stylesBtn.confirmBtn}
          type='button'
          children='Confirm'
        />
      </Link>

    </div>
  )
}

export default ShowEditPlan;