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
import { flexbox } from '@mui/system';


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
    responsive: false,
    plugins: {
        legend: {
            position: 'top',
        }, gradient,


    },
};



const labels = ['2022'];
const dataValues = [800, 650, 785, 1500, 1000];
const months = ['Jan', 'Feb', 'Mars', 'April', 'May']



export const data = {
    labels,
    datasets: [

        {
            label: months[0],
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
            label: months[1],
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
            label: months[2],
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
            label: months[3],
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
            label: months[4],
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

export default function StaticsCard(props) {
    return (
        <div className={props.Class}>
            <div className='p-8 md:p-16'><h1 className='text-base md:text-lg'>Monthly Revenue</h1>
                <h1 className='text-lg md:text-3xl text-gray-400 '>$ <span className='font-bold text-gray-900'>1500</span></h1></div>
            <div className='hidden md:inline-block'><Bar options={options} data={data} className="w-full ml-0 md:ml-5" /></div>
        </div>
    )
}
