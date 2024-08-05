import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

import { useAppContext } from '../contexts/AppContext';
import Editor from './Editor';
import Popup from './Popup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';

library.add(faFloppyDisk);

const CreateDoc = () => {

    const [content,setContent] = useState('');
    const [title, setTitle] = useState('');
    const { theme } = useAppContext();
    const [ color, setColor] = useState(`${theme.block_color}`);
    const [notification, setNotification] = useState(null);

    const nav = useNavigate();

    // getting userID from clerk
    const { user } = useUser();

    if (!user) {
        return <div>Loading...</div>;
    }
    const userId = user.id;

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    
    //  CREATE 
    const handleSave = async () => {
        
        // data that needs to be send with request
        const data = { title, content, userId };
        
        try {
            const response = await axios.post(`${API_URL}/create`, data);

            if( response.status === 201 )
            {
                console.log('Document saved : ', response.data);
                setNotification({
                    type: 'success',
                    message: 'Action completed successfully!',
                });
                
                // Redirect to the main page (home page) on success after a delay
                setTimeout(() => {
                    nav('/');
                }, 5000);

                return () => clearTimeout(timeout); // Cleanup timeout on component unmount
            }

        } 
        
        catch (error) {
            console.error('Error while saving document:', error);
            setNotification({
                type: 'error',
                message: 'Error! Please try again.',
            });
        }
    };

    return (
        <>
            {notification && (
                <Popup
                    onClose={() => setNotification(null)}
                    type={notification.type}
                    message={notification.message}
                />
            )}

            <div className='flex h-[90vh] sm:h-[88vh]'>
                
                <div className='w-full'>
                    
                    <div className='p-[2vh] h-[11.5vh] px-8 flex items-center justify-between'>

                        <input style={{ borderBottom:`1px solid ${theme.primary_text}`}} 
                            className='text-2xl bg-transparent p-[1vh] outline-none max-w-80'
                            placeholder='Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        /> 
                        
                        <button style={{ background:color }} className='px-3 py-2 rounded-md hover:scale-105 text-base sm:text-lg md:text-xl'
                            onMouseOver={() => setColor(`${theme.hover_color}`)}
                            onMouseOut={() => setColor(`${theme.block_color}`)}
                            onClick={handleSave}
                        > 
                            <FontAwesomeIcon icon={faFloppyDisk} style={{ color:`${theme.primary_text}`}}/> 
                            &nbsp; Save
                        </button>
                            
                    </div>
                    
                    <Editor value={content} onChange={setContent} />

                </div>

            </div>
        </>
    )
}

export default CreateDoc