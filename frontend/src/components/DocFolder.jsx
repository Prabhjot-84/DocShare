import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { useAppContext } from '../contexts/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTrashCan);
library.add(faShare);

const DocFolder = ( {document} ) => {

    const { theme } = useAppContext();
    const [ color1, setColor1] = useState(`${theme.block_color}`);

    useEffect(() => {
        // Update color1 whenever theme.block_color changes
        setColor1(theme.block_color);
    }, [theme.block_color]);    

    const formatDate = (dateString) => {
        const date = new Date(dateString); 
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const formattedDate = date.toLocaleDateString('en-GB', options).replace(/,/g, '');
        return formattedDate;
    };

    return (
        <>
            <Link to={`doc/${document._id}`} className='z-10 flex flex-row items-center w-[325px] m-auto'>

                <div style={{ background:color1 }}
                    onMouseOver={() => setColor1(`${theme.hover_color}`)}
                    onMouseOut={() => setColor1(`${theme.block_color}`)}
                    className='w-full rounded-md hover:cursor-pointer hover:scale-105 p-4'>

                    <div className='flex items-center justify-between px-1 pb-3 w-full'>
                        <div className='flex items-center max-w-72'>
                            <h1 style={{ background:`${theme.bg_color}`}} className='p-1 rounded-sm'> 📝 </h1>
                            <h1 className='overflow-hidden whitespace-nowrap text-ellipsis'>  &nbsp; {document.title}  </h1>
                        </div>
                    </div>

                    <hr style={{ border:`1px solid ${theme.bg_color}` }} />

                    <div className='flex items-center justify-between pt-3'>
                        <h1 style={{ background:`${theme.bg_color}`}} className='p-1 px-2 rounded-sm '> {formatDate(document.createdAt)} </h1>
                        <h1 style={{ background:`${theme.bg_color}`}} className='p-1 px-2 rounded-sm'>
                            {/* number of people document has been shared with   */}
                            <FontAwesomeIcon icon="share" style={{ color:`${theme.primary_text}`}} /> 
                        </h1>
                    </div>

                </div>

            </Link>
        </>
    )
}

export default DocFolder