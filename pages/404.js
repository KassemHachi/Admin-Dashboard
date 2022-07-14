import React from 'react'
import Link from 'next/link';
import Layout from '../Components/Layout'
import Side from '../Components/Side'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/Topbar'
import Main from '../Components/Main';

import { Modal, Button, Image, Text, Link as LINK } from "@nextui-org/react";

export default function Page404() {
    return (
        <Layout >
            <Side >
                <SideBar ActivePage={0} />
            </Side>

            <main className='col-span-3 p-4  overflow-y-scroll'>

                <Topbar />
                <div className='flex items-center justify-center  h-[70vh]'>
                    <div className='animate-fade-in-up   px-3 mt-10 '>
                        <h1 className='text-2xl md:text-4xl my-2 font-bold w-fit'>ERROR 404 :</h1>
                        <h2 className='text-xl md:text-2xl font-semibold w-fit'>Page not found return to{" "}
                            <Link href={"/"}>
                                <LINK className='cursor-pointer'>home</LINK>
                            </Link>
                        </h2>
                    </div>
                </div>
            </main>
        </Layout >
    )
}
