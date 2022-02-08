import React from "react";
import { Chart, CategoryScale, LinearScale, Legend, Tooltip, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(Tooltip, Legend, CategoryScale, LinearScale, BarElement)

const BarChart = () => {


  const data = {
    labels: ['Carbs', 'Fat', 'Protein'],
    datasets: [
      {
        label: 'Grams in Meal plan',
        data: [22, 13, 51],
        backgroundColor: [
          "#FFAC3B"
        ],
        yAxisID: 'grams',
        barThickness: 40
      },
    ],
  };


  return (
    <div style={{'width': '320px', 'margin': '0 auto'}}>
      <Bar
      height={100}
      width={100}
      data={data}
      />
    </div>


  )
}

export default BarChart