import Head from 'next/head'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

import SideBar from '../Components/SideBar';
import SummaryStatics from '../Components/SummaryStatics';
import Topbar from '../Components/Topbar';
import StaticsCard from '../Components/StaticsCard';
export default function Home() {
  const [isactive, setActive] = useState(true);
  const [count, setCount] = useState(0);
  const handlerClick = () => {
    setCount(count + 1);
  }


  return (
    <div className='grid grid-cols-4 h-screen bg-gray-100'>
      <SideBar />
      <div className='col-span-3 p-5 pt-16'>

        <Topbar />
        <SummaryStatics />

        <div className='grid grid-cols-3 mt-5 gap-7'>
          <StaticsCard />
          <div className='col-spa n-1 from-blue-900 to-blue-700 bg-gradient-to-t rounded-md shadow-md  min-h-[400px]'>

          </div>
        </div>
      </div>

    </div>
  )
}
