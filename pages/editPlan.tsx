import React from 'react';
import DoughnutChart from '../components/DoughnutChart';

const editPlan = () => {
  return (
    <div>
      <h1>Edit my Plan</h1>
      <DoughnutChart 
      remainingBudget={300}
      amountSpent={100}/>
    </div>
  )
}

export default editPlan;