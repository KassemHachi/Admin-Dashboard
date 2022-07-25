
import { Avatar, Dropdown, Input } from "@nextui-org/react";
import { FaSearch } from 'react-icons/fa';
import { RiNotification4Fill } from 'react-icons/ri';
import UserImageSmall from "./UserImageSmall";
import Badge from '@mui/material/Badge';
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
        <Dropdown><Badge badgeContent={Math.floor(Math.random() * (15 - 1 + 1) + 1)} overlap="circular" className="group hover:scale-110  transition-all ease-linear" color="primary" >
      <Dropdown.Button color={"#f3f4f6"} className="p-0">
            <RiNotification4Fill className=' w-7 h-auto text-gray-400  group-hover:text-[#0d79f5] cursor-pointer hover:scale-110  transition-all ease-linear ' />
         </Dropdown.Button> </Badge>
      <Dropdown.Menu aria-label="Dynamic Actions" className="w-16" items={menuItems}>
 
      <Dropdown.Item className="py-8 mt-1"
            key={Math.floor(Math.random() * (15 - 1 + 1) + 1)}
            color={"default"}
          >
          <div className="flex">
              <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          size="sm"
          className="mr-3"
        />
        Liked your photo
          </div>
      
          </Dropdown.Item>
          <Dropdown.Item className="py-8 mt-1"
            key={Math.floor(Math.random() * (15 - 1 + 1) + 1)}
            color={"default"}
          >
          <div className="flex">
              <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          size="sm"
          className="mr-3"
        />
        Liked your photo
          </div>
      
          </Dropdown.Item>
          

    


      </Dropdown.Menu>
    </Dropdown>
          
          <UserImageSmall />

        </div>
      </div>
    </div>
  )
}
