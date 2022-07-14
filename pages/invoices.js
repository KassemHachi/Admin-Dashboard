import React from 'react'

import IvoicesTabel from '../Components/IvoicesTabel'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/Topbar'
import Layout from '../Components/Layout';
import Side from '../Components/Side';
import Main from '../Components/Main';
import AddInvoiceModal from '../Components/AddInvoiceModal';

import { Button, ButtonGroup } from '@mui/material'
import { AiFillFileAdd, AiFillDelete, AiTwotoneEdit } from 'react-icons/ai';
export default function Invoices() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
    };
    return (

        <Layout >
            <Side >
                <SideBar ActivePage={2} />
            </Side>

            <Main className='col-span-3 p-4  overflow-y-scroll'>

                <Topbar />
                <div className='animate-fade-in-up flex items-center justify-between  px-3 mt-10'>
                    <h1 className='text-lg md:text-2xl font-semibold w-fit'>Invoices list:</h1>
                    <ButtonGroup className=' ' variant="contained" aria-label="outlined primary button group">
                        <Button className='bg-transparent text-[#3c85f5] hover:bg-[#3c85f5] hover:text-white' onClick={handler} ><AiFillFileAdd className='text-lg mr-2' /><span className='hidden md:inline'> Add</span></Button>
                        <Button className='bg-transparent text-[#3c85f5] hover:bg-[#3c85f5] hover:text-white' ><AiTwotoneEdit className='text-lg mr-2' /><span className='hidden md:inline'> Edit</span></Button>
                        <Button className='bg-transparent text-[#3c85f5] hover:bg-[#e42f66] hover:text-white' ><AiFillDelete className='text-lg mr-2' /><span className='hidden md:inline'> Delete</span></Button>
                    </ButtonGroup>
                </div>
                <AddInvoiceModal open={visible} onClose={closeHandler} />
                <IvoicesTabel className="animate-fade-in-up mt-7 shadow-md rounded-xl bg-white h-[600px]  p-1" />
            </Main>
        </Layout >

    )
}
