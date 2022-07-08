import React from 'react'

export default function SummaryStatics() {
  return (
    <div className='mt-7 shadow-md grid grid-cols-4 rounded-xl bg-white w-full min-h-[100px] px-2 py-8'>
    <div className='col-span-1 border-r-2 border-gray-200'>
      <div className='grid grid-cols-2'>
        <div className='col-span-1'></div>
        <div className='col-span-1'>
          <h4>Total Revenue</h4>
          
          <h1 className='text-2xl font-bold mt-1'>1,4525 k</h1>
        </div>
      </div>
    </div>
    <div className='col-span-1 border-r-2 border-gray-200'>
    <div className='grid grid-cols-2'>
        <div className='col-span-1'></div>
        <div className='col-span-1'>
          <h4>Total Revenue</h4>
          
          <h1 className='text-2xl font-bold mt-1'> 1,516</h1>
        </div>
      </div>
    </div>
    <div className='col-span-1 border-r-2 border-gray-200'>
    <div className='grid grid-cols-2'>
        <div className='col-span-1'></div>
        <div className='col-span-1'>
          <h4>Total Revenue</h4>
          
          <h1 className='text-2xl font-bold mt-1'>  2,216</h1>
        </div>
      </div>
    </div>
    <div className='col-span-1'>
    <div className='grid grid-cols-2'>
        <div className='col-span-1'></div>
        <div className='col-span-1'>
          <h4>Total Revenue</h4>
          
          <h1 className='text-2xl font-bold mt-1'> $ 216k</h1>
        </div>
      </div>
    </div>
  </div>
  )
}
