import React from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import ShoppingList from '../../components/ShoppingList';
import { useShoppingList } from '../../lib/hooks/';
import { usePlan } from '../../lib/hooks';
import Link from 'next/link'
import NavButton from '../../components/NavButton';
import stylesBtn from '../../styles/Buttons.module.css';


const ViewShoppingList = () => {

  const { plan } = usePlan();
  const { data, error, isLoading } = useShoppingList(plan);

  if (isLoading) return null;

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
    </div>
  )
}

export default ViewShoppingList;