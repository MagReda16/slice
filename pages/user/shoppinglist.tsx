import React from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import ShoppingList from '../../components/ShoppingList';
import { useShoppingList } from '../../lib/hooks/useShoppingList';


const ViewShoppingList = () => {

  const { data, error, isLoading} = useShoppingList('715536,716429');

  console.log(data);


  return (
    <div>
      <h1>My Shopping List</h1>
      <DoughnutChart 
        remainingBudget={300}
        amountSpent={100}/>
        <div>
       <ShoppingList data={data} />
        </div>
    </div>
  )
}

export default ViewShoppingList;