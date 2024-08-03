import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { useAppContext } from '../contexts/AppContext';
import { SignedIn, UserButton } from '@clerk/clerk-react';

library.add(faPlus);

const Navbar = () => {

    const { theme, setFont, setTheme, themes } = useAppContext();
    const [ color1, setColor1] = useState('transparent');
    const [ color2, setColor2] = useState('transparent');
    const [ FontMenu, setFontMenu] = useState('-60vh');
    const [ ThemeMenu, setThemeMenu] = useState('-60vh');

    const CollapseFonts = () => {
        setFontMenu(prevState => (prevState === '-60vh' ? '11vh' : '-60vh'));
    }

    const CollapseThemes = () => {
        setThemeMenu(prevState => (prevState === '-60vh' ? '11vh' : '-60vh'));
    }

    const ChangeFont = (value) => {
        setFont(value);
    };

    const changeTheme = (themeName) => {
        setTheme(themes[themeName]);
    };

    return (
        <>
            <nav style={{ background:`${theme.nav_color}`, color:`${theme.secondary_text}`}} className='h-[10vh] sm:h-[12vh] p-4 sm:px-10 py-4 sm:py-6 flex items-center justify-between'>

                <div className='flex items-center justify-evenly w-fit'>
                    <img className='w-8' src={Logo} alt='logo' />
                    <h1 style={{fontFamily:'Nova Square'}} className='text-2xl font-bold tracking-wide hidden sm:block'> &nbsp; DocShare </h1>
                </div>

                <div className='flex items-center'>

                    <Link to='/create' style={{ background:`${theme.hover_color}`, color:`${theme.primary_text}`}} className='h-10 px-4 rounded-md hover:scale-105 mr-4 flex items-center justify-center'>
                        <FontAwesomeIcon icon="plus" style={{ color:`${theme.primary_text}`}} />
                        &nbsp; Create Doc
                    </Link>                  

                    <button style={{ border:`2px solid ${theme.hover_color}`, background:color1}}
                            onMouseOver={() => setColor1(`${theme.hover_color}`)}
                            onMouseOut={() => setColor1('transparent')} 
                            onClick={ CollapseFonts }
                            className='h-10 px-3 rounded-md font-bold  mr-4'> 
                        Aa
                    </button>

                    <button style={{ border:`2px solid ${theme.hover_color}`, background:color2}} 
                            onMouseOver={() => setColor2(`${theme.hover_color}`)}
                            onMouseOut={() => setColor2('transparent')}
                            onClick={ CollapseThemes }
                            className='h-10 px-3 rounded-md font-bold mr-4'>
                        🎨
                    </button>

                    <div style={{ display:'block', top:FontMenu }} className='absolute right-16 bg-white text-black rounded-sm z-10 text-center w-36'>
                        <h1 onClick={() => ChangeFont('Playfair Display')} style={{ fontFamily:'Playfair Display'}} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer' > Serif </h1>
                        <h1 onClick={() => ChangeFont('Open Sans')} style={{ fontFamily:'Open Sans'}} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer' > Sans-serif </h1>
                        <h1 onClick={() => ChangeFont('Inconsolata')} style={{ fontFamily:'Inconsolata'}} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer' > Monospace </h1>
                        <h1 onClick={() => ChangeFont('Bad Script')} style={{ fontFamily:'Bad Script'}} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer' > Script </h1>
                        <h1 onClick={() => ChangeFont('Handlee')} style={{ fontFamily:'Handlee'}} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer' > Handwriting </h1>
                        <h1 onClick={() => ChangeFont('Montserrat')} style={{ fontFamily:'Montserrat'}} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer' > Geometric </h1>
                        <h1 onClick={() => ChangeFont('Baskervville')} style={{ fontFamily:'Baskervville'}} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer' > Transitional </h1>
                        <h1 onClick={() => ChangeFont('Merienda')} style={{ fontFamily:'Merienda'}} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer' > Modern </h1>
                    </div>

                    <div style={{ display:'block', top:ThemeMenu }} className='absolute top-[11vh] right-16 bg-white text-black rounded-sm z-10 text-center w-32'>
                        <h1 onClick={() => changeTheme('light')} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer flex items-center pl-4' > <div className='w-4 h-4 rounded-sm bg-[white]'></div> &nbsp;Light </h1>
                        <h1 onClick={() => changeTheme('dark')} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer flex items-center pl-4' > <div className='w-4 h-4 rounded-sm bg-[#404040]'></div> &nbsp;Dark </h1>
                        <h1 onClick={() => changeTheme('red')} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer flex items-center pl-4' > <div className='w-4 h-4 rounded-sm bg-red-500'></div> &nbsp;Red </h1>
                        <h1 onClick={() => changeTheme('blue')} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer flex items-center pl-4' > <div className='w-4 h-4 rounded-sm bg-[#004d99]'></div> &nbsp;Blue </h1>
                        <h1 onClick={() => changeTheme('pink')} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer flex items-center pl-4' > <div className='w-4 h-4 rounded-sm bg-pink-400'></div> &nbsp;Pink </h1>
                        <h1 onClick={() => changeTheme('gray')} className='text-lg py-1 px-2 hover:font-semibold bg-slate-200 hover:bg-slate-300 m-1 rounded-sm hover:cursor-pointer flex items-center pl-4' > <div className='w-4 h-4 rounded-sm bg-gray-400'></div> &nbsp;Gray </h1>
                    </div>

                    <SignedIn>
                      <UserButton />
                    </SignedIn>

                </div>
            </nav>
        </>
    )
}

export default Navbar