import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Doc from './Doc';

library.add(faPlus);

const Column = () => {

    const { theme } = useAppContext();
    const [ color, setColor] = useState('transparent');

    return (
        <div className='w-[375px] h-full mr-6 px-4 overflow-y-scroll custom-scrollbar'>

            <div className='flex items-center justify-between px-6 mb-6'>
                <h1 className='text-2xl font-semibold overflow-hidden whitespace-nowrap text-ellipsis'> Personal </h1>
                &nbsp;
                <FontAwesomeIcon icon="plus"
                    style={{ background:color, color:`${theme.primary_text}`, border:`2px solid ${theme.primary_text}` }}
                    onMouseOver={() => setColor(`${theme.hover_color}`)}
                    onMouseOut={() => setColor('transparent')}
                    className="rounded-md p-1 hover:cursor-pointer hover:scale-110" />
            </div>
            
            <Doc />
            <Doc />
            <Doc />

        </div>
    );
};

export default Column;
