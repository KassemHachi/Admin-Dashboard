import React from 'react'
import Logo from '../Components/Logo';
import ListItem from '../Components/ListItem';
export default function SideBar(props) {
  props.isActive = false;
  return (
    <div className='col-span-1'>
      <Logo />
      <div className='mt-14'>
        <ul className='list-none '>
          <ListItem isActive={props.isActive} href="/" Text="Home" />
          <ListItem isActive={props.isActive} href="/invoices" Text="Invoices" />
          <ListItem isActive={props.isActive} href="#" Text="Clients" />
          <ListItem isActive={props.isActive} href="#" Text="Products" />
          <ListItem isActive={props.isActive} href="#" Text="Messages" />
        </ul>
      </div>
    </div>
  )
}
