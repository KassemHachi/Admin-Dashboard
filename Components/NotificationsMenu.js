import { Badge } from '@mui/material'
import { Avatar, Dropdown, Tooltip } from '@nextui-org/react'
import React from 'react'
import { RiNotification4Fill } from 'react-icons/ri'

export default function NotificationsMenu() {
  return (
    <Dropdown><Badge badgeContent={Math.floor(Math.random() * (15 - 1 + 1) + 1)} overlap="circular" className="group hover:scale-110  transition-all ease-linear" color="primary" >
      <Dropdown.Button color={"#f3f4f6"} className="p-0">
        <RiNotification4Fill className=' w-7 h-auto text-gray-400  group-hover:text-[#0d79f5] cursor-pointer hover:scale-110  transition-all ease-linear ' />
      </Dropdown.Button> </Badge>
      <Dropdown.Menu aria-label="Dynamic Actions" className="w-16" css={{ $$dropdownMenuWidth: "300px" }}>

        <Dropdown.Item className="py-8 mt-1"
          key={Math.floor(Math.random() * (1000 - 1 + 1) + 1)}
          color={"default"}

        >
          <div className="flex items-center "><Tooltip content="User Name" placement="left" arrow>
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              size="md"
              className="mr-3"
            /> </Tooltip>
            <div>
              <p>Liked your photo</p>
              <span className='text-slate-400 text-xs'>19:33 25-07-2022</span>
            </div>
          </div>


        </Dropdown.Item>



        <Dropdown.Item className="py-8 mt-1"
          key={Math.floor(Math.random() * (1000 - 1 + 1) + 1)}
          color={"default"}

        >
          <div className="flex items-center"><Tooltip content="User Name" placement="left" arrow>
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              size="md"
              className="mr-3"
            /></Tooltip>
            <div>
              <p>Liked your photo</p>
              <span className='text-slate-400 text-xs'>19:33 25-07-2022</span>
            </div>
          </div>


        </Dropdown.Item>






      </Dropdown.Menu>
    </Dropdown>
  )
}
