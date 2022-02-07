import React from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import ShoppingList from '../../components/ShoppingList';
import { useShoppingList } from '../../lib/hooks/';
import { usePlan } from '../../lib/hooks';
import Link from 'next/link'
import NavButton from '../../components/NavButton';
import stylesBtn from '../../styles/Buttons.module.css';
import styles from '../../styles/ShoppingList.module.css';
import Spinner from '../../components/Spinner';


const ViewShoppingList = () => {

  const { plan, isPlanLoading } = usePlan();
  const { data, error, isLoading } = useShoppingList(plan);

  if (isPlanLoading) return <Spinner />

  if (data.length === 0 && plan.recipes.length !== 0) return <Spinner />

  const displayIngredients = () => {
    if (data.length === 0) {
      return <p className={styles.noRecipes}>Add recipes to see a list of ingredients</p>
    } else {
      return <ShoppingList data={data} />
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.shoppingListTitle}>
        <Link href='/user/plan'>
          <NavButton
            className={stylesBtn.backArrowBtn}
            type='button'
            children='⬅'
          />
        </Link>
        <h1>Shopping List</h1>
      </div>
      <DoughnutChart />
      {displayIngredients()}
    </div>
  )
}

export default ViewShoppingList;