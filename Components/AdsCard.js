import React from 'react'
import { Button } from '@mui/material'
export default function AdsCard() {
    return (
        <div className='col-span-1 from-blue-900 to-blue-700 bg-gradient-to-t rounded-md shadow-md  min-h-[400px] py-16 px-10'>
            <Button className='bg-slate-200 rounded-full px-5 text-center'> NEW</Button>
            <h1 className='text-white mt-4 text-2xl font-semibold'>We Have Added new invoicing Templates</h1>
        </div>
    )
}
