import React, { useState } from 'react'
import Logo from '../assets/logo2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { useAppContext } from '../contexts/AppContext';
import { SignedIn, UserButton } from '@clerk/clerk-react';

library.add(faPlus);

const Navbar = () => {

    const { theme } = useAppContext();
    const [ color1, setColor1] = useState('transparent');
    const [ color2, setColor2] = useState('transparent');

    return (
        <>
            <nav style={{ background:`${theme.nav_color}`, color:`${theme.secondary_text}`}} className='px-10 py-6 flex items-center justify-between'>
                <div className='flex items-center justify-evenly w-fit'>
                    <img className='w-8' src={Logo} alt='logo' />
                    <h1 className='text-2xl font-bold tracking-wide'> &nbsp; DocShare </h1>
                </div>
                <div className='flex items-center'>
                    <button style={{ background:`${theme.hover_color}`, color:`${theme.primary_text}`}} className='h-10 px-4 rounded-md hover:scale-105 mr-4'>
                        <FontAwesomeIcon icon="plus" style={{ color:`${theme.primary_text}`}} />
                        &nbsp; Create Space
                    </button>                   
                    <button style={{ border:`2px solid ${theme.hover_color}`, background:color1}}
                            onMouseOver={() => setColor1(`${theme.hover_color}`)}
                            onMouseOut={() => setColor1('transparent')} 
                            className='h-10 px-3 rounded-md font-bold  mr-4'> 
                        Aa
                    </button>
                    <button style={{ border:`2px solid ${theme.hover_color}`, background:color2}} 
                            onMouseOver={() => setColor2(`${theme.hover_color}`)}
                            onMouseOut={() => setColor2('transparent')}
                            className='h-10 px-3 rounded-md font-bold mr-4'>
                        🎨
                    </button>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </>
    )
}

export default Navbar