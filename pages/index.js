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
    <div className='grid grid-cols-4 h-screen bg-gray-100 w-full fixed'>
      <SideBar />
      <div className='col-span-3 p-5 pt-16  overflow-y-scroll'>

        <Topbar />
        <SummaryStatics />

        <div className='grid grid-cols-3 mt-5 gap-7'>
          <StaticsCard />
          <AdsCard />
        </div>
      </div>

    </div>
  )
}
