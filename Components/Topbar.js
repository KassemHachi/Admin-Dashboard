
import {  Input } from "@nextui-org/react";
import { FaSearch } from 'react-icons/fa';

import UserImageSmall from "./UserImageSmall";
import Badge from '@mui/material/Badge';
import NotificationsMenu from "./NotificationsMenu";
export default function Topbar() {
  const menuItems = [
    { key: "new", name: "New File" },
    { key: "copy", name: "Copy Link" },
    { key: "edit", name: "Edit File" },
    { key: "delete", name: "Delete File" },
  ];
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
        
          <NotificationsMenu/>
          <UserImageSmall />

        </div>
      </div>
    </div>
  )
}
