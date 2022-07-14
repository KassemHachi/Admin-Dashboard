import React from 'react'
import Layout from '../Components/Layout'
import Side from '../Components/Side'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/Topbar'

export default function Products() {
    return (
        <Layout >
            <Side >
                <SideBar ActivePage={4} />
            </Side>

            <main className='col-span-3 p-4  overflow-y-scroll'>

                <Topbar />
                <div className='animate-fade-in-up flex items-center justify-between  px-3 mt-10'>
                    <h1 className='text-lg md:text-2xl font-semibold w-fit'>Products list:</h1>
                </div>
            </main>
        </Layout >
    )
}
