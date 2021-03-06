
import { Input } from "@nextui-org/react";
import { FaSearch } from 'react-icons/fa';
import { RiNotification4Fill } from 'react-icons/ri';
import UserImageSmall from "./UserImageSmall";
import Badge from '@mui/material/Badge';
export default function Topbar() {
  return (
    <div className='grid  grid-cols-2 lg:grid-cols-4'>
      <div className='col-span-1'>
        <div className='w-full '>
          <Input
            className='group focus-within:border-blue-600 border-2 '
            placeholder="Search ..."
            width="100%"
            contentLeft={<FaSearch className='group-focus-within:text-blue-600 transition-all ease-linear text-gray-300' />}
          />
        </div>
      </div>

      <div className='col-span-1 lg:col-span-3 '>
        <div className='flex gap-5 justify-end'>
          <Badge badgeContent={Math.floor(Math.random() * (15 - 1 + 1) + 1)} overlap="circular" className=" hover:scale-110  transition-all ease-linear" color="primary" >
            <RiNotification4Fill className=' w-7 h-auto text-gray-400  hover:text-[#0d79f5] cursor-pointer hover:scale-110  transition-all ease-linear ' />
          </Badge>
          <UserImageSmall />

        </div>
      </div>
    </div>
  )
}
