import React from 'react'
import Layout from '../Components/Layout'
import Side from '../Components/Side'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/Topbar'
import Main from '../Components/Main';
import ClientsTable from '../Components/ClientsTable'

export default function clients() {
    return (
        <Layout >
            <Side >
                <SideBar ActivePage={3} />
            </Side>

            <Main className='col-span-3 p-4  overflow-y-scroll'>

                <Topbar />
                <div className='animate-fade-in-up flex items-center justify-between  px-3 mt-10'>
                    <h1 className='text-lg md:text-2xl font-semibold w-fit'>Clients list:</h1>
                </div>
                <ClientsTable className="animate-fade-in-up mt-7 shadow-md rounded-xl bg-white h-[600px]  p-1" />

            </Main>
        </Layout >
    )
}
