import React from 'react'
import { BiLineChartDown, BiLineChart } from 'react-icons/bi';
import SummeryStaticItem from './SummeryStaticItem';
export default function SummaryStatics() {
  return (
    <div className='mt-7 shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  rounded-xl bg-white w-full min-h-[100px] px-2 py-8'>
      <SummeryStaticItem Border="md:border-r-2" Icon={<BiLineChartDown className='text-5xl text-rose-700' />} Title="Total Revenue" Value="1,455 k"/>
      <SummeryStaticItem Border="border-r-0 lg:border-r-2" Icon={   <BiLineChart className='text-5xl text-emerald-500' />} Title="Total Members" Value="1,516"/>
      <SummeryStaticItem Border="md:border-r-2" Icon={ <BiLineChart className='text-5xl text-emerald-500' />} Title="Total Clients" Value="2,216"/>
      <SummeryStaticItem Icon={   <BiLineChartDown className='text-5xl text-rose-700' />} Title="Total Amount" Value="$ 216k"/>
    </div>
  )
}
