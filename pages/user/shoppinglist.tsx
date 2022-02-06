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

  if (isLoading || isPlanLoading) return <Spinner />

  const displayIngredients = () => {
    if (plan.recipes.length !== 0 && data.length === 0) {
      return <Spinner />
    } else {
      return <ShoppingList data={data} />
    }
  }

  return (
    <div>
      <div className={styles.shoppingListTitle}>
        <Link href='/user/plan'>
          <NavButton
            className={stylesBtn.backArrowBtn}
            type='button'
            children='⬅'
          />
        </Link>
        <h1>Shopping List</h1>
        <DoughnutChart />
      </div>
      {displayIngredients()}
    </div>
  )
}

export default ViewShoppingList;