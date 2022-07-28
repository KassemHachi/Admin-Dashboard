import React from 'react'
import { Button } from '@mui/material'
export default function AdsCard(props) {
    return (
        <div className={props.className}>
            <h1 className='bg-slate-200 text-blue-700 rounded-full px-3 py-1 md:px-5 md:py-2 font-normal md:font-medium text-left w-fit hover:bg-slate-200 cursor-default' > NEW</h1>
            <h1 className='text-white my-2 md:my-5 text-lg md:text-2xl text-left md:font-semibold'>We Have Added new invoicing Templates</h1>
            <p className='text-white text-base md:text-lg font-thin text-left'> New templates focused on helping you improve your business </p>
            <Button className='mt-10 md:mt-14 py-3 hover:text-white text-center bg-slate-200 text-blue-900 w-full font-medium hover:bg-slate-200 hover:text-blue-900 hover:opacity-95 transition-all ease-linear shadow-none hover:shadow-md hover:scale-105'> Downlaod Now </Button>
        </div>
    )
}
