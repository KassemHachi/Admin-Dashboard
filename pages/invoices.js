import React from 'react'
import IvoicesTabel from '../Components/IvoicesTabel'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/Topbar'
import { Button, ButtonGroup } from '@mui/material'
import { MdOutlineModeEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineFileAdd } from 'react-icons/ai';
export default function Invoices() {
    return (

        <div className='grid grid-cols-4 pt-2  h-screen bg-gray-100 w-full fixed'>
            <SideBar ActivePage={2} />
            <div className='col-span-3 p-4  overflow-y-scroll'>

                <Topbar />
                <div className='flex items-center justify-between px-3 mt-10'>
                    <h1 className='text-2xl font-semibold '>Invoices list:</h1>
                    <ButtonGroup className=' ' variant="contained" aria-label="outlined primary button group">
                        <Button className='bg-transparent text-[#3c85f5] hover:bg-[#3c85f5] hover:text-white' ><AiOutlineFileAdd className='mr-2' /> Add</Button>
                        <Button className='bg-transparent text-[#3c85f5] hover:bg-[#3c85f5] hover:text-white' ><MdOutlineModeEdit className='mr-2' /> Edit</Button>
                        <Button className='bg-transparent text-[#3c85f5] hover:bg-[#e42f66] hover:text-white' ><RiDeleteBin6Line className='mr-2' /> Delete</Button>
                    </ButtonGroup>
                </div>
                <IvoicesTabel className="mt-7 shadow-md rounded-xl bg-white h-[600px]  p-1" />
            </div>
        </div>

    )
}
