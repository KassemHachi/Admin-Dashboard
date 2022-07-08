import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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

const labels = ['2022'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Jan',
            data: labels.map(() => 800),
            backgroundColor: 'rgb(235,235,235)',
        },
        {
            label: 'Feb',
            data: labels.map(() => 650),
            backgroundColor: 'rgb(235,235,235)',
        },
        {
            label: 'Mars',
            data: labels.map(() => 785),
            backgroundColor: 'rgb(235,235,235)',
        },
        {
            label: 'April',
            data: labels.map(() => 1500),
            backgroundColor: 'rgb(78,128,237)',

        },
        {
            label: 'May',
            data: labels.map(() => 840),
            backgroundColor: 'rgb(235,235,235)',

        },
    ],
};

export default function StaticsCard() {
    return (
        <div className='col-span-2 bg-white rounded-md shadow-md  min-h-[400px] p-16'>
            <h1 className='text-lg'>Monthly Revenue</h1>
            <h1 className='text-3xl text-gray-400 '>$ <span className='font-bold text-gray-900'>150000</span></h1>
            <Bar options={options} data={data} />
        </div>
    )
}
