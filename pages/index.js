import Head from 'next/head'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Button, Input} from "@nextui-org/react";
import {FaSearch } from 'react-icons/fa';
import {RiNotificationLine } from 'react-icons/ri';
import SideBar from '../Components/SideBar';
import Image from '@nextui-org/react';

export default function Home() {
  const [isactive , setActive ] = useState(true);
  const [count , setCount ] = useState(0);
  const handlerClick = () => {
    setCount(count + 1 );
  } 
     
 
  return (
    <div className='grid grid-cols-4 h-screen bg-gray-100'>
      <SideBar/>
      <div className='col-span-3 p-5 pt-16'>
      
        <div className='grid grid-cols-4 '>
          <div className='col-span-1'>
          <div className='w-full'><Input 
        className='group focus-within:border-blue-600 border-2'
        Placeholder="Search ..."   
        width="100%"

        contentLeft={<FaSearch className='group-focus-within:text-blue-600 transition-all ease-linear text-gray-300'
        
        />}
      /></div>
          </div>
          <div className='col-span-1'>

          </div>
          <div className='col-span-1'>

          </div>
          <div className='col-span-1'>
          <div className='flex gap-5'>
       
         <RiNotificationLine className='w-7 h-auto text-gray-400  hover:text-[#0d79f5] cursor-pointer hover:scale-125  transition-all ease-linear '/>
         
          <div className=' flex items-center gap-3'>
          <img  
          src ="https://i.pinimg.com/564x/5a/5d/1d/5a5d1d0a05d050a89b7d836cf63ca35c.jpg"
          className=' w-10 h-auto rounded-full overflow-clip cursor-pointer hover:scale-125 hover:shadow-sm transition-all ease-linear '
          />
          <div>
            <h4 className='text-black font-semibold text-base'>Jahn Doe</h4>
            <h6 className='text-gray-400 font-medium text-sm'>Developer</h6>
          </div>
          </div>
          </div>
          </div>
        </div>
        
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
        <div className='grid grid-cols-3 mt-5 gap-7'>
          <div className='col-span-2 bg-white rounded-md shadow-md  min-h-[400px] '>
            <h1 className='mt-20'>Monthly Revenue</h1>
          </div>
          <div className='col-span-1 from-blue-900 to-blue-700 bg-gradient-to-t rounded-md shadow-md  min-h-[400px]'>

          </div>
        </div>
      </div>
      
    </div>
  )
}
