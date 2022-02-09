import React from 'react';
import Link from 'next/link';
import { Chart, ArcElement, Tooltip } from 'chart.js';
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
        data: remaining > 0 ? [plan.totalPlanCost, remaining] : [plan.totalPlanCost],
        backgroundColor: remaining > 0 ? [
          "#FFAC3B",
          "#FFD59C",
        ] : ["#E75858"],
      },
    ],
  };

  const options: any = {
    cutout: isMain ? 100 : 65,
    plugins: {
      tooltip: {
        mode: 'nearest',
        yAlign: 'bottom',
        padding: 10,
        caretPadding: 90,
        caretSize: 0
      }
    }
  }

  const containerClasses = `${styles.chart} ${isMain ? styles.main : ''}`
  const infoClasses = `${styles.chartInfo} ${isMain ? styles.mainInfo : ''}`

  return (
    <div>
      <div className={containerClasses}>
        <Doughnut
          height={300}
          width={300}
          data={chartData}
          options={options}
        />
        <div className={infoClasses}>
          <Link href='/user/plan/breakdown'>
            <a>
              <p style={remaining < 0 ? { color: "#E75858" } : {}}>${displaySpent}</p>
              <span><p>${user.budget}</p></span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DoughnutChart;
