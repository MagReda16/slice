import React from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import ShoppingList from '../../components/ShoppingList';
import { useShoppingList } from '../../lib/hooks/';
import { usePlan } from '../../lib/hooks';


const ViewShoppingList = () => {

  const { plan } = usePlan();
  const { data, error, isLoading } = useShoppingList(plan);

  if (isLoading) return null;

  return (
    <div>
      <h1>My Shopping List</h1>
      <DoughnutChart />
        <div>
       <ShoppingList data={data.flat()} />
        </div>
    </div>
  )
}

export default ViewShoppingList;