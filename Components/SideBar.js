import React from 'react'
import Logo from '../Components/Logo';
import ListItem from '../Components/ListItem';
export default function SideBar() {
  return (
    <div className='col-span-1'>
    <Logo/>
    <div className='mt-10'>
      <ul className='list-none '>
      <ListItem href="#" Text="Home"/>
      <ListItem href="#" Text="Invoices"/>
      <ListItem href="#" Text="Clients"/>
      <ListItem href="#" Text="Products"/>
      <ListItem href="#" Text="Messages"/>
      </ul>
    </div>
  </div>
  )
}
