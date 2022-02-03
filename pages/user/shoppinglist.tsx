import React from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import ShoppingList from '../../components/ShoppingList';
import { useShoppingList } from '../../lib/hooks/useShoppingList';
import { usePlan } from '../../lib/hooks';


const ViewShoppingList = () => {

  const { plan } = usePlan();

  // if (isLoading) return []
 
  // if (!isLoading) console.log(plan);
  const { data, error, isLoading } = useShoppingList(plan); 

  console.log('IN PAGE', data);

  if (isLoading) return null;

  return (
    <div>
      <h1>My Shopping List</h1>
      <DoughnutChart 
        remainingBudget={300}
        amountSpent={100}/>
        <div>
       <ShoppingList data={data.flat()} />
        </div>
    </div>
  )
}

export default ViewShoppingList;