import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumpsterFire } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add the icon to the library
library.add(faDumpsterFire);
library.add(faCircleXmark);

const DeletePopup = ( {onClose, onDelete} ) => {

    return (
        <>
            <div className='z-10 absolute flex items-center justify-center w-screen h-screen bg-[#00000080]'>
                
                <div className='z-20 w-fit m-auto p-6 px-8 rounded-md text-black border-[1px] border-black bg-white'>
                    
                    <div className='flex items-center justify-between mb-3 text-2xl'>
                        {/* Pop-Up Title */}
                        <div className='flex items-center justify-start  font-bold '>
                            <FontAwesomeIcon icon={faDumpsterFire} className='bg-slate-300 p-2 rounded ' /> &nbsp; Confirm Deletion
                        </div>
                        {/* Close Pop-Up */}
                        <FontAwesomeIcon onClick={onClose} icon={faCircleXmark} className='text-black hover:text-green-600 hover:cursor-pointer' />
                    </div>
                    
                    {/* Deletion Message */}
                    <h1 className='ml-14 mr-8 mb-4'> This action will permanently remove the document. 
                        <br/>
                        Do you wish to proceed ? 
                    </h1>
                    
                    {/* Delete Button */}
                    <div className='flex justify-end'>
                        <button onClick={onDelete}  // Handle delete on click
                            className='bg-red-700 text-slate-200 px-3 py-2 rounded-md hover:bg-red-600 hover:text-white mr-8'>   
                                Delete 
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DeletePopup