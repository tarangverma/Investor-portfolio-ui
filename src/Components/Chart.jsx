import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import faker from 'faker';

  ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    ); 

    export const options = {
        plugins: {
          title: {
            display: true,
            text: 'Contributions Overtime',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      };

      const labels = ['20', '25', '30', '35', '40', '60', '65'];

      export const data = {
        labels,
        datasets: [
          {
            label: 'Employee K73,500',
            barThickness: '10',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#0800a3',
          },
          {
            label: 'Employee K52,200',
            barThickness: '10',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#4a35ff',
          },
          {
            label: 'Total Interest',
            barThickness: '10',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#85b0ff',
          },
        ],
      };

export default function Chart() {


   
 
     
    
  return (
    <div>
       <div>
        <Bar options={options} data={data} />
       </div>
    </div>
  )
}
