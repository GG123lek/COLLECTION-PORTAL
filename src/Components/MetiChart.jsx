import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const MetiChart = () => {
  const [series] = useState([{
    name: 'Servings',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
  }]);

  const [options] = useState({
    annotations: {
      points: [{
        x: 'Bananas',
        seriesIndex: 0,
        label: {
          borderColor: '#775DD0',
          offsetY: 0,
          style: {
            color: '#fff',
            background: '#775DD0',
          },
          text: 'Bananas are good',
        }
      }]
    },
    chart: {
      height: 350,
      type: 'bar',
      toolbar: {
        show: false // Disable toolbar if needed
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '50%',
        endingShape: 'flat' // Ensure the bar ends flat
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: false, // Ensure stroke is not shown
      width: 0
    },
    grid: {
        show: false, // Disable the grid lines
      },
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
      ],
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'Servings',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "horizontal",
        shadeIntensity: 0.25,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
      },
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={300} />
      </div>
    </div>
  );
};

export default MetiChart;

