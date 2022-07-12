import React from 'react'
import Logo from '../Components/Logo';
import ListItem from '../Components/ListItem';
export default function SideBar(props) {


  return (
    <div className='col-span-1'>
      <Logo />
      <div className='mt-14'>
        <ul className='list-none '>
          {props.ActivePage == 1 ? <ListItem isActive={true} href="/" Text="Home" /> : <ListItem isActive={false} href="/" Text="Home" />}
          {props.ActivePage == 2 ? <ListItem isActive={true} href="/invoices" Text="Invoices" /> : <ListItem isActive={false} href="/invoices" Text="Invoices" />}
          {props.ActivePage == 3 ? <ListItem isActive={true} href="#" Text="Clients" /> : <ListItem isActive={false} href="#" Text="Clients" />}
          {props.ActivePage == 4 ? <ListItem isActive={true} href="#" Text="Products" /> : <ListItem isActive={false} href="#" Text="Products" />}
          {props.ActivePage == 5 ? <ListItem isActive={true} href="#" Text="Messages" /> : <ListItem isActive={false} href="#" Text="Messages" />}
        </ul>
      </div>
    </div>
  )
}
