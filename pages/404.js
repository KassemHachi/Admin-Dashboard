import React from 'react'
import Link from 'next/link';
import Layout from '../Components/Layout'
import Side from '../Components/Side'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/Topbar'
import Main from '../Components/Main';

import { Link as LINK } from "@nextui-org/react";

export default function Page404() {
    return (
        <Layout >
            <Side >
                <SideBar ActivePage={0} />
            </Side>

            <Main className='col-span-3 p-4  overflow-y-scroll'>


                <div className='flex items-center justify-center  h-[70vh] gap-8'>
                    <img className='animate-fade-in-up px-3 mt-10' src='https://cdn-icons-png.flaticon.com/512/463/463612.png' width='15%' height='15%' />
                    <div className='animate-fade-in-up border-slate-900  px-3 mt-10 w-fit '>
                        <h1 className='text-5xl md:text-4xl my-4 text-slate-800  font-bold w-fit'>ERROR 404 :</h1>
                        <h2 className='text-2xl md:text-2xl text-slate-800 font-semibold w-fit'>Page not found return to{" "}
                            <Link href={"/"}>
                                <LINK className='cursor-pointer'>home</LINK>
                            </Link>
                        </h2>
                    </div>
                </div>
            </Main>
        </Layout >
    )
}
