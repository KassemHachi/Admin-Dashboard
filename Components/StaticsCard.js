import React from 'react'

export default function StaticsCard() {
    return (
        <div className='col-span-2 bg-white rounded-md shadow-md  min-h-[400px] p-16'>
            <h1 className='text-lg'>Monthly Revenue</h1>
            <h1 className='text-3xl text-gray-400 '>$ <span className='font-bold text-gray-900'>150000</span></h1>
        </div>
    )
}
