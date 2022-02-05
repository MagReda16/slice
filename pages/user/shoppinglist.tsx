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
      {data.length === 0
        ? <p className={styles.noRecipes}>No items here yet!</p>
        : <ShoppingList data={data} />
      }
    </div>
  )
}

export default ViewShoppingList;