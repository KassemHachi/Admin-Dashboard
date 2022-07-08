import React from 'react'
import { Button } from '@mui/material'
export default function AdsCard() {
    return (
        <div className='col-span-1 flex-col justify-center text-center from-blue-900 to-blue-700 bg-gradient-to-t rounded-md shadow-md  min-h-[400px] py-16 px-10'>
            <h1 className='bg-slate-200 text-blue-700 rounded-full px-5 py-2 font-medium text-left w-fit hover:bg-slate-200 cursor-default' > NEW</h1>
            <h1 className='text-white my-5 text-2xl text-left font-semibold'>We Have Added new invoicing Templates</h1>
            <p className='text-white text-lg font-thin text-left'> New templates focused on helping you improve your business </p>
            <Button className='mt-14 py-3 hover:text-white text-center bg-slate-200 text-blue-900 w-full'> Downlaod Now </Button>
        </div>
    )
}
