import React from 'react';
import { Chart, ArcElement, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { usePlan, useUser } from '../lib/hooks';
import styles from '../styles/DoughnutChart.module.css';

Chart.register(ArcElement, Tooltip);

type DoughnutChartProps = {
  isMain?: boolean
}

const DoughnutChart = ({ isMain }: DoughnutChartProps) => {

  const { plan } = usePlan();
  const { user } = useUser();

  const remaining = user.budget - plan.totalPlanCost;
  const displaySpent = plan.totalPlanCost.toFixed(2)

  const chartData = {
    labels: ['Amount spent', 'Remaining budget'],
    datasets: [
      {
        data: [plan.totalPlanCost, remaining],
        backgroundColor: [
          "#FFD59C",
          "#FFAC3B"
        ],
      },
    ],
  };

  const options = {
    cutout: 70
  }
  const containerClasses = `${styles.chart} ${isMain ? styles.main : ''}`
  const infoClasses = `${styles.chartInfo} ${isMain ? styles.mainInfo: ''}`

  return (
    <div>
      <div className={containerClasses}>
        <Doughnut
          height={300}
          width={300}
          data={chartData}
          options={options}
        />
        <div className={infoClasses}>${displaySpent}/${user.budget}</div>
      </div>
    </div>
  )
}

export default DoughnutChart;


  //from tutorial, adds text to center of chart
  // const plugins = [{
  //   beforeDraw: function(chart:any) {
  //    let width = chart.width,
  //        height = chart.height,
  //        ctx = chart.ctx;
  //        ctx.restore();
  //        let fontSize = (height / 160).toFixed(2);
  //        ctx.font = fontSize + "em sans-serif";
  //        ctx.textBaseline = "top";
  //        let text = "70%",
  //        textX = Math.round((width - ctx.measureText(text).width) / 2),
  //        textY = height / 2;
  //        ctx.fillText(text, textX, textY);
  //        ctx.save();
  //   }
  // }]