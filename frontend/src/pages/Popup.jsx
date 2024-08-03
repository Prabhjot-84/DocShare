import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFire, faBug } from '@fortawesome/free-solid-svg-icons';

library.add(faFire, faBug);

const Popup = ({ onClose, type, message }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const icon = type === 'success' ? 'fire' : 'bug';
    const background = type === 'success' ? 'bg-green-700' : 'bg-red-600';
    const border = type === 'success' ? '1px solid #22C55E' : '1px solid #EF4444';

    return (
        <div className='z-50 absolute flex items-center justify-center w-screen h-screen bg-[#00000080]'>
            <div className={`z-70 w-fit m-auto p-4 px-5 rounded-md text-white border-[1px] ${border} text-xl ${background}`}>
                <FontAwesomeIcon icon={icon} className='text-yellow-400 text-2xl' /> &nbsp; {message}
            </div>
        </div>
    );
};

export default Popup;
