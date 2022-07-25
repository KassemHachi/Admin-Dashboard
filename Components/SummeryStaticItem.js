import React from 'react'

export default function SummeryStaticItem(props) {
  return (
    <div className={"col-span-1 my-4 lg:my-0  "+ props.Border +" border-gray-200"}>
    <div className='grid grid-cols-2'>
      <div className='col-span-1 flex justify-center items-center'>
       { props.Icon}
      </div>
      <div className='col-span-1'>
        <h4>{props.Title}</h4>
        <h1 className='text-xl xl:text-2xl font-bold mt-1'>{props.Value}</h1>
      </div>
    </div>
  </div>
  )
}
