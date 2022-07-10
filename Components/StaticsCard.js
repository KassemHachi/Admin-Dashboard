import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import gradient from 'chartjs-plugin-gradient';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    gradient
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        }, gradient,
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    stepSize: 200
                }
            }],
            xAxes: [{
                id: 'x1'
            },
            {
                id: 'x2',
                display: false,
                offset: true
            }]
        },

    },
};



const labels = ['2022'];
const dataValues = [800, 650, 785, 1500, 1000];
const months = ['Jan', 'Feb', 'Mars', 'April', 'May']



export const data = {
    labels,
    datasets: [

        {
            label: 'Jan',
            data: labels.map(() => dataValues[0]),
            gradient: {
                backgroundColor: {
                    axis: 'y',
                    colors: { 0: "#ddd", 800: "#efefef" }
                }
            },
            borderRadius: 15,
        },
        {
            label: 'Feb',
            data: labels.map(() => dataValues[1]),
            borderRadius: 15,
            gradient: {
                backgroundColor: {
                    axis: 'y',
                    colors: { 0: "#ddd", 650: "#efefef" }
                }
            },
        },
        {
            label: 'Mars',
            data: labels.map(() => dataValues[2]),

            borderRadius: 15,
            gradient: {
                backgroundColor: {
                    axis: 'y',
                    colors: { 0: "#ddd", 785: "#efefef" }
                }
            },
        },
        {
            label: 'April',
            data: labels.map(() => dataValues[3]),
            borderRadius: 15,
            gradient: {
                backgroundColor: {
                    axis: 'y',
                    colors: { 0: "#1d4ed8", 1500: "#1e3a8b" }
                }
            },

        },
        {
            label: 'May',
            data: labels.map(() => dataValues[4]),
            borderRadius: 15,
            gradient: {
                backgroundColor: {
                    axis: 'y',
                    colors: { 0: "#1d4ed8", 1000: "#1e3a8b" }
                }
            },
        },]
    ,
};

export default function StaticsCard() {
    return (
        <div className='col-span-2 bg-white rounded-md shadow-md  h-[450px] p-16'>
            <h1 className='text-lg'>Monthly Revenue</h1>
            <h1 className='text-3xl text-gray-400 '>$ <span className='font-bold text-gray-900'>1500</span></h1>
            <Bar options={options} data={data} />
        </div>
    )
}
