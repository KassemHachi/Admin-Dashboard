import React from 'react'
import { Modal, Button, Image, Text, Link } from "@nextui-org/react";

export default function ListItem(props) {



  return (
    <li className='mx-1 md:mx-8 my-5 text-lg md:text-xl items-start'>
      <Link href={props.href} style={props.isActive == true ? { backgroundColor: '#4e80ed', color: "#fff" } : {}} className={props.isActive == true ? "rounded-lg  text-center  px-5 py-3  w-full  transition-all ease-in duration-500" : "rounded-lg  text-center text-blue-600 bg-transparent px-2 py-3   hover:bg-blue-600  w-full hover:text-white  transition-all ease-in duration-500"} >
        <div className='flex items-center justify-center w-full'>  {props.Icon}
          <p className='hidden md:inline'>{props.Text}</p></div>
      </Link >

    </li >

  );
}




