import React from 'react';
import { Chart, ArcElement, Legend  } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Legend);



const DoughnutChart = () => {

  const data = {
    labels: ['Remaining budget', 'Amount spent'],
    datasets: [
        {
        data: [200, 100],
        backgroundColor: [
          "#FFAC3B",
          "#FFD59C"
        ]
      },
    ],
  };



  return(
    <div>
    <div style={{width: "250px", margin: '0 auto'}}>
      <Doughnut 
        height={300}
        width={300}
        data={data}
        // plugins={plugins}
     />
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