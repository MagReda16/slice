import React from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import ShoppingList from '../../components/ShoppingList';
import { useShoppingList } from '../../lib/hooks/';
import { usePlan } from '../../lib/hooks';
import Link from 'next/link'
import NavButton from '../../components/NavButton';
import stylesBtn from '../../styles/Buttons.module.css';
import styles from '../../styles/ShoppingList.module.css';


const ViewShoppingList = () => {

  const { plan } = usePlan();
  const { data, error, isLoading } = useShoppingList(plan);

  if (isLoading) return <div>...</div>
  if (!data) return <h1>No items yet! Add some recipes</h1>


  return (
    <div>
       <Link href='/user/plan/edit'>
        <NavButton
        className={stylesBtn.backArrowBtn}
        type='button'
        children='⬅'
      />
      </Link>
      <h1>My Shopping List</h1>
      <DoughnutChart />
        <div>
       <ShoppingList data={data.flat()} />
        </div>
      <div className={styles.shoppingListTitle}>
        <h1>Shopping List</h1>
        <DoughnutChart />
      </div>
      <div>
        <ShoppingList data={data.flat()} />
      </div>
    </div>
  )
}

export default ViewShoppingList;