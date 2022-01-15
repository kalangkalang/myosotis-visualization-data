import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import faker from 'faker';
import { cloneDeep } from "lodash";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

function initOptionChart(responsive, titleChart, legend_position) {
  const optionChart = cloneDeep(options);

  optionChart.responsive = responsive;
  optionChart.plugins.title.text = titleChart;
  optionChart.plugins.legend = legend_position;

  return optionChart;
}

export const mockedDataBarChart = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const mockedDataLineChart = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function BarChart({titleChart = "Chart aja", datasets, responsive= true, legend_position="top"}) {

  const localOptions = initOptionChart(responsive, titleChart, legend_position)

  return (
    <div className="bg-white p-5 w-96 h-48 flex justify-center items-center border-2 border-sky-50 rounded">
      <Bar className="border-2 border-stone-100 rounded-md" options={localOptions} data={mockedDataBarChart} />
    </div>
  ); 
}

export function LineChart({titleChart = "Chart aja", datasets, responsive= true, legend_position="top"}) {

  const localOptions = initOptionChart(responsive, titleChart, legend_position);

  return (
    <div className="bg-white p-5 w-96 h-48 flex justify-center items-center border-2 border-sky-50 rounded">
      <Line className="border-2 border-stone-100 rounded-md" options={localOptions} data={mockedDataLineChart} />
    </div>
  )

}






