import React from 'react'
import Logo from '../Components/Logo';
import ListItem from '../Components/ListItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillFileEarmarkRuledFill } from 'react-icons/bs';
import { FaUserFriends, FaBox } from 'react-icons/fa';
import { RiMessage3Fill } from 'react-icons/ri';
export default function SideBar(props) {


  return (
    <>
      <Logo />
      <div className='mt-14'>
        <ul className='list-none ml-0 md:ml-5'>
          {props.ActivePage == 1 ? <ListItem isActive={true} href="/" Text="Home" Icon={<AiFillHome className='text-2xl mr-0 md:mr-4' />} /> : <ListItem isActive={false} href="/" Text="Home" Icon={<AiFillHome className='text-2xl mr-0 md:mr-4' />} />}
          {props.ActivePage == 2 ? <ListItem isActive={true} href="/invoices" Text="Invoices" Icon={<BsFillFileEarmarkRuledFill className='text-2xl mr-0 md:mr-4' />} /> : <ListItem isActive={false} href="/invoices" Text="Invoices" Icon={<BsFillFileEarmarkRuledFill className='text-2xl mr-0 md:mr-4' />} />}
          {props.ActivePage == 3 ? <ListItem isActive={true} href="/clients" Text="Clients" Icon={<FaUserFriends className='text-2xl mr-0 md:mr-4' />} /> : <ListItem isActive={false} href="/clients" Text="Clients" Icon={<FaUserFriends className='text-2xl mr-0 md:mr-4' />} />}
          {props.ActivePage == 4 ? <ListItem isActive={true} href="/products" Text="Products" Icon={<FaBox className='text-2xl mr-0 md:mr-4' />} /> : <ListItem isActive={false} href="/products" Text="Products" Icon={<FaBox className='text-2xl mr-0 md:mr-4' />} />}
          {props.ActivePage == 5 ? <ListItem isActive={true} href="/messages" Text="Messages" Icon={<RiMessage3Fill className='text-2xl mr-0 md:mr-4' />} /> : <ListItem isActive={false} href="/messages" Text="Messages" Icon={<RiMessage3Fill className='text-2xl mr-0 md:mr-4' />} />}
        </ul>
      </div>
    </>
  )
}
