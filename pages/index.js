import Head from 'next/head'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

import SideBar from '../Components/SideBar';
import SummaryStatics from '../Components/SummaryStatics';
import Topbar from '../Components/Topbar';
import StaticsCard from '../Components/StaticsCard';
import AdsCard from '../Components/AdsCard';
import Layout from '../Components/Layout';
import Side from '../Components/Side';
import Main from '../Components/Main';

export default function Home() {

  return (


    <Layout>
      <Side >
        <SideBar ActivePage={1} />
      </Side>
      <Main className='col-span-3 p-4 lg:pr-12  overflow-y-scroll'>

        <Topbar />
        <SummaryStatics />

        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-5 gap-7'>
          <StaticsCard className='col-span-1 lg:col-span-2 bg-white rounded-md shadow-md  sm:h-fit md:h-full ' />
          <AdsCard className='col-span-1 flex-col justify-center text-center from-blue-900 to-blue-700 bg-gradient-to-t rounded-md shadow-md sm:h-fit md:h-full py-16 px-10' />
        </div>
      </Main>

    </Layout>

  )
}
