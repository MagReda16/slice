import React, {useState} from 'react';
import DoughnutChart from '../components/DoughnutChart';


const viewPlan = () => {

  return(
    <div>
      <h1>This week's plan</h1>
      <DoughnutChart
        remainingBudget={300}
        amountSpent={100} />
    </div>
  )
}

export default viewPlan;