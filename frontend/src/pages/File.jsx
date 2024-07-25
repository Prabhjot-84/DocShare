import React, { useState } from 'react'
import { useAppContext } from '../contexts/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faEllipsis);
library.add(faShare);

const File = () => {

    const { theme } = useAppContext();
    const [ color1, setColor1] = useState(`${theme.block_color}`);
    const [ color2, setColor2] = useState('transparent');

    return (
        <>
            <div className='flex flex-row items-center w-[325px] m-auto'>

                <div style={{ background:color1 }}
                    onMouseOver={() => setColor1(`${theme.hover_color}`)}
                    onMouseOut={() => setColor1(`${theme.block_color}`)}
                    className='w-full rounded-md hover:cursor-pointer hover:scale-105 p-4'>

                    <div className='flex items-center justify-between px-1 pb-3 w-full'>
                        <div className='flex items-center max-w-56'>
                            <h1 style={{ background:`${theme.bg_color}`}} className='p-1 rounded-sm'> 💻 </h1>
                            <h1 className='overflow-hidden whitespace-nowrap text-ellipsis'>  &nbsp; Computer Networks Here we go again  </h1>
                        </div>
                        <FontAwesomeIcon icon="ellipsis"
                            style={{ background:color2, color:`${theme.primary_text}`, border:`1px solid ${theme.primary_text}` }}
                            onMouseOver={() => setColor2(`${theme.bg_color}`)}
                            onMouseOut={() => setColor2('transparent')}
                            className="rounded-md p-1 hover:cursor-pointer hover:scale-105"/>
                    </div>

                    <hr style={{ border:`1px solid ${theme.bg_color}` }} />

                    <div className='flex items-center justify-between pt-3'>
                        <h1 style={{ background:`${theme.bg_color}`}} className='p-1 px-2 rounded-sm'> created At </h1>
                        <h1 style={{ background:`${theme.bg_color}`}} className='p-1 px-2 rounded-sm'> 73 <FontAwesomeIcon icon="share" style={{ color:`${theme.primary_text}`}} /> </h1>
                    </div>

                </div>

            </div>
        </>
    )
}

export default File