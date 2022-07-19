import React from 'react'

export default function Layout({ children }) {
    return (
        <div className='grid grid-cols-6 md:grid-cols-4 pt-2  h-screen bg-gray-100 w-full fixed'>{children}</div>
    )
}
