import React from 'react';
import DoughnutChart from '../components/DoughnutChart';


const viewShoppingList = () => {

  return (
    <div>
      <h1>My Shopping List</h1>
      <DoughnutChart 
        remainingBudget={300}
        amountSpent={100}/>
        <div>
          {/* shopping list items here */}
        </div>
    </div>
  )
}

export default viewShoppingList;