import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../contexts/AppContext';
import { SignIn, SignedIn, SignedOut } from '@clerk/clerk-react'

const Layout = () => {

    const { theme, font } = useAppContext();

    return (
        <>
            <SignedOut>
                <div style={{ background:`${theme.bg_color}`}} className='flex justify-center items-center h-screen'>
                    <SignIn />
                </div>
            </SignedOut>

            <SignedIn> 
                <div style={{ fontFamily:`${font}`, background:`${theme.bg_color}`, color:`${theme.primary_text}` }} className='h-screen overflow-hidden'>
                    <Outlet />
                </div>
            </SignedIn>
        </>
    )
}

export default Layout