import { Badge } from '@mui/material'
import { Dropdown, } from '@nextui-org/react'
import React from 'react'
import { RiNotification4Fill } from 'react-icons/ri'
import NotificationMenuItem from './NotificationMenuItem'

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
          <NotificationMenuItem TooltipContent="User Name" AvatarSrc="https://i.pravatar.cc/150?u=a042581f4e29026024d" NotifiationText="Liked your photo" NotifiationDate="10:33 27-07-2022" />

        </Dropdown.Item>

        <Dropdown.Item className="py-8 mt-1"
          key={Math.floor(Math.random() * (1000 - 1 + 1) + 1)}
          color={"default"}

        >
          <NotificationMenuItem TooltipContent="User Name" AvatarSrc="https://i.pravatar.cc/150?u=a042581f4e29026024d" NotifiationText="Liked your photo" NotifiationDate="11:33 28-07-2022" />

        </Dropdown.Item>





      </Dropdown.Menu>
    </Dropdown>
  )
}
