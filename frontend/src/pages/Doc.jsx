import React, { useState } from 'react'

import { useAppContext } from '../contexts/AppContext';
import Editor from './Editor';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';

library.add(faFloppyDisk);

const Doc = () => {

    const [content,setContent] = useState('');
    const { theme } = useAppContext();

    return (
        <>
            <div className='flex h-[90vh] sm:h-[88vh]'>
                
                <div className='w-3/4'>
                    
                    <div className='p-[2vh] h-[11.5vh] px-8 flex items-center justify-between'>
                        <input style={{ borderBottom:`1px solid ${theme.primary_text}`}} placeholder='Title' className='text-2xl bg-transparent p-[1vh] outline-none max-w-80' /> 
                        <button style={{ background:`${theme.hover_color}` }} className='px-3 py-2 rounded-md hover:scale-105'> 
                            <FontAwesomeIcon icon={faFloppyDisk} style={{ color:`${theme.primary_text}`}}/> 
                            &nbsp; Save 
                        </button>
                    </div>
                    
                    <Editor value={content} onChange={setContent} />

                </div>

                <div style={{ background:`${theme.block_color}`}} className='bg-white w-1/4 '>

                </div>

            </div>
        </>
    )
}

export default Doc