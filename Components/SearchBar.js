import React from 'react'
import {  Input } from "@nextui-org/react";
import { FaSearch } from 'react-icons/fa';
export default function SearchBar() {
  return (
    <Input
    className='group focus-within:border-blue-600 border-2 '
    placeholder="Search ..."
    width="100%"
    contentLeft={<FaSearch className='group-focus-within:text-blue-600 transition-all ease-linear text-gray-300' />}
  />
  )
}
