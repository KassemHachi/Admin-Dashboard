import React from 'react'
import { Modal, Button, Image, Text, Link } from "@nextui-org/react";

export default function ListItem(props) {
  props.isActive = false;
  const isactive = props.isActive;
  if (isactive) {
    return (
      <li className='mx-5 my-5 text-xl items-start'>
        <Link href={props.href} className="rounded-lg  text-center  px-5 py-3   bg-blue-600  w-full text-white  transition-all ease-in duration-500" >
          {props.Text}
        </Link>


      </li>);
  }
  return (<li className='mx-5 my-5 text-xl items-start'>
    <Link href={props.href} className="rounded-lg  text-center  px-5 py-3   hover:bg-blue-600  w-full hover:text-white  transition-all ease-in duration-500" >
      {props.Text}
    </Link>



  </li>);
}
  

}
