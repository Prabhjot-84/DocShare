import React, { useState } from 'react'

import { useAppContext } from '../contexts/AppContext';
import Editor from './Editor';


const Doc = () => {

    const [content,setContent] = useState('');
    const { theme } = useAppContext();

    return (
        <>
            <div className='h-[90%] flex'>
                <div className='w-3/4 p-4'>
                    <Editor value={content} onChange={setContent} />
                </div>

                <div style={{ background:`${theme.block_color}`}} className='bg-white w-1/4 h-full'>

                </div>
            </div>
        </>
    )
}

export default Doc