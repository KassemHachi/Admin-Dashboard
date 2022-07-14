import React from 'react'
import { Link } from 'react-admin'
import Layout from '../Components/Layout'
import Side from '../Components/Side'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/Topbar'

export default function Page404() {
    return (
        <Layout >
            <Side >
                <SideBar ActivePage={0} />
            </Side>

            <main className='col-span-3 p-4  overflow-y-scroll'>

                <Topbar />
                <div className='flex items-center justify-center  h-[70vh]'>
                    <div className='animate-fade-in-up   px-3 mt-10 '>
                        <h1 className='text-2xl md:text-4xl my-2 font-bold w-fit'>ERROR 404 :</h1>
                        <h2 className='text-xl md:text-2xl font-semibold w-fit'>Page not found return to <Link src="/">home</Link> </h2>
                    </div>
                </div>
            </main>
        </Layout >
    )
}
