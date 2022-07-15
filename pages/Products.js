import React from 'react'
import Layout from '../Components/Layout'
import Side from '../Components/Side'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/Topbar'
import Main from '../Components/Main';
import ProductsTable from '../Components/ProductsTable'

export default function products() {
    return (
        <Layout >
            <Side >
                <SideBar ActivePage={4} />
            </Side>

            <Main className='col-span-3 p-4  overflow-y-scroll'>

                <Topbar />
                <div className='animate-fade-in-up flex items-center justify-between  px-3 mt-10'>
                    <h1 className='text-lg md:text-2xl font-semibold w-fit'>Products list:</h1>
                </div>
                <ProductsTable className="animate-fade-in-up mt-7 shadow-md rounded-xl bg-white h-[600px]  p-1" />

            </Main>
        </Layout >
    )
}
