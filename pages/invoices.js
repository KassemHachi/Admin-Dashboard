import React from 'react'
import IvoicesTabel from '../Components/IvoicesTabel'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/Topbar'
export default function Invoices() {
    return (

        <div className='grid grid-cols-4 pt-2  h-screen bg-gray-100 w-full fixed'>
            <SideBar />
            <div className='col-span-3 p-4  overflow-y-scroll'>

                <Topbar />
                <IvoicesTabel className="mt-7 shadow-md rounded-xl bg-white h-96  p-1" />
            </div>
        </div>

    )
}
