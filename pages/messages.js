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
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>
            <Layout>
                <Side >
                    <SideBar ActivePage={5} />
                </Side>
                <Main className='col-span-3 p-4 lg:pr-12  overflow-y-scroll'>
                    <Topbar />
                    <h1 className='mt-10'>Messages List</h1>
                </Main>

            </Layout>
        </>
    )
}
