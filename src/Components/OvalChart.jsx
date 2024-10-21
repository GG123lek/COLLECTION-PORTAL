import  { useState } from 'react';
import "./OvalChart.css"
import ReactApexChart from 'react-apexcharts';

const OvalChart = () => {
 
  const [series] = useState([14, 23, 21, 17, 15, 10, 12, 17, 21]);
  const options = {
    chart: {
      type: 'polarArea',
    },
    stroke: {
      colors: ['#fff'],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
   <>
   <div id="chart">
        <ReactApexChart options={options} series={series} type="polarArea" />
   </div>
   </>
  );
};

export default OvalChart