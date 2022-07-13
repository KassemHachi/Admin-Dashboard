import React from 'react'

import IvoicesTabel from '../Components/IvoicesTabel'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/Topbar'
import Layout from '../Components/Layout';
import Side from '../Components/Side';

import { Button, ButtonGroup } from '@mui/material'
import { AiFillFileAdd, AiFillDelete, AiTwotoneEdit } from 'react-icons/ai';
export default function Invoices() {
    return (

        <Layout >
            <Side >
                <SideBar ActivePage={2} />
            </Side>

            <main className='col-span-3 p-4  overflow-y-scroll'>

                <Topbar />
                <div className='animate-fade-in-up flex items-center justify-between px-3 mt-10'>
                    <h1 className='text-2xl font-semibold '>Invoices list:</h1>
                    <ButtonGroup className=' ' variant="contained" aria-label="outlined primary button group">
                        <Button className='bg-transparent text-[#3c85f5] hover:bg-[#3c85f5] hover:text-white' ><AiFillFileAdd className='text-lg mr-2' /> Add</Button>
                        <Button className='bg-transparent text-[#3c85f5] hover:bg-[#3c85f5] hover:text-white' ><AiTwotoneEdit className='text-lg mr-2' /> Edit</Button>
                        <Button className='bg-transparent text-[#3c85f5] hover:bg-[#e42f66] hover:text-white' ><AiFillDelete className='text-lg mr-2' /> Delete</Button>
                    </ButtonGroup>
                </div>
                <IvoicesTabel className="animate-fade-in-up mt-7 shadow-md rounded-xl bg-white h-[600px]  p-1" />
            </main>
        </Layout>

    )
}
