import React from 'react';
import { Chart, CategoryScale, LinearScale, Tooltip, BarElement } from 'chart.js';
import { usePlan } from '../lib/hooks';
import { calcNutrients } from '../lib/helpers';
import { Bar } from 'react-chartjs-2';

Chart.register(Tooltip, CategoryScale, LinearScale, BarElement)


const BarChart = () => {

  const { plan } = usePlan();

  const res = calcNutrients(plan.recipes);

  const nutr = Object.values(res).filter((el: any) => {
    if (el.name !== 'Calories') return el
  });

  const data = {
    labels: nutr.map((el: any) => el.name),
    datasets: [
      {
        label: 'Grams',
        data: nutr.map((el: any) => el.amount),
        backgroundColor: '#E75858',
        hoverBackgroundColor: '#E13030',
        yAxisID: 'grams',
        barThickness: 40
      },
    ],
  };


  return (
    <div style={{ 'width': '320px', 'margin': '0 auto' }}>
      <Bar
        height={100}
        width={100}
        data={data}
      />
    </div>


  )
}

export default BarChart