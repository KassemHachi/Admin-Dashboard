import Head from 'next/head'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

import SideBar from '../Components/SideBar';
import SummaryStatics from '../Components/SummaryStatics';
import Topbar from '../Components/Topbar';
import StaticsCard from '../Components/StaticsCard';
import AdsCard from '../Components/AdsCard';
import Chart from 'chart.js';

export default function Home() {
  const [isactive, setActive] = useState(true);
  const [count, setCount] = useState(0);
  const handlerClick = () => {
    setCount(count + 1);

  }





  return (
    <div className='grid grid-cols-4 pt-2  h-screen bg-gray-100 w-full fixed'>
      <SideBar />
      <div className='col-span-3 p-4  overflow-y-scroll'>

        <Topbar />
        <SummaryStatics />

        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-5 gap-7'>
          <StaticsCard className='col-span-1 lg:col-span-2 bg-white rounded-md shadow-md  h-[450px] ' />
          <AdsCard className='col-span-1 flex-col justify-center text-center from-blue-900 to-blue-700 bg-gradient-to-t rounded-md shadow-md h-[300px] md:h-[450px] py-16 px-10' />
        </div>
      </div>

    </div>
  )
}
