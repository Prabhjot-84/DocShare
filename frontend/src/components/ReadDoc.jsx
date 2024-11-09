import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import { htmlToText } from 'html-to-text';

import { useAppContext } from '../contexts/AppContext';
import Editor from './Editor';
import Popup from './Popup';
import { editDocument } from '../utils/editDocument'
import { deleteDocument } from '../utils/deleteDocument';
import { downloadPDF } from '../utils/downloadPDF';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import DeletePopup from './DeletePopup';

library.add(faTrashCan);
library.add(faBars);
library.add(faFloppyDisk);

const ReadDoc = () => {
    
    const { theme, font } = useAppContext();

    const { id } = useParams(); // Get the document ID from the URL
    const [document, setDocument] = useState(null);

    const [ content, setContent] = useState('');
    const [ color1, setColor1] = useState(`${theme.block_color}`);
    const [ color2, setColor2] = useState('transparent');
    const [ color3, setColor3] = useState('transparent');
    const [ isCollapsed, setIsCollapsed] = useState('none');
    // const [isExpanded, setIsExpanded] = useState('100%');
    const [ iconBg, setIconBg] = useState('transparent');
    const [ iconText, setIconText] = useState(`${theme.primary_text}`);
    const [ iconBorder, setIconBorder] = useState(`1px solid ${theme.primary_text}`);
    const [ notification, setNotification] = useState(null);
    const [ isPopupVisible, setIsPopupVisible] = useState(false);

    const nav = useNavigate();

    const [title, setTitle] = useState('');

    const CollapseFunction = () => {
        // setIsCollapsed('0'); // Toggle the collapsed state
        setIsCollapsed(prevState => (prevState === 'none' ? 'block' : 'none'));
        // setIsExpanded(prevState => (prevState === '100%' ? '75%' : '100%'));
    };

    // handling DELETE POP-UP 
    const handleDeleteClick = () => {
        setIsPopupVisible(true);
    };
    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };


    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    // GET req while opens this document, to fetch data to present on screen
    useEffect(() => {

        setColor1(theme.block_color);
        setIconText(theme.primary_text);
        setIconBorder(`1px solid ${theme.primary_text}`)

        const fetchDocument = async () => {
            try {
                const response = await axios.get(`${API_URL}/doc/${id}`);
                const fetchedDocument = response.data;
                setDocument(fetchedDocument);
                setContent(fetchedDocument.content); // Set content state
                setTitle(fetchedDocument.title); // Set title state
            } catch (error) {
                console.error('Error fetching document:', error);
            }
        };

        fetchDocument();
    }, [id]);  

    // Handle case when document is not loaded yet
    if (!document) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {isPopupVisible && (
                <DeletePopup 
                    onClose={handleClosePopup} 
                    onDelete={() => deleteDocument(document._id, setNotification, nav)}
                />
            )}

            {notification && (
                <Popup
                    onClose={() => setNotification(null)}
                    type={notification.type}
                    message={notification.message}
                />
            )}
            
            <div className='flex h-[90vh] sm:h-[88vh]'>
                
                <div style={{ width:'-webkit-fill-available'}}>
                    
                    <div className='p-[2vh] pb-0 h-[11.5vh] px-8 flex items-center justify-between'>


                        {/* TITLE */}
                        <input style={{ borderBottom:`1px solid ${theme.primary_text}`}} 
                                placeholder='Title' 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} // Update title state on change
                                className='text-2xl bg-transparent p-[1vh] outline-none max-w-80' /> 
                        
                        <div className='flex items-center'>
                            
                            {/* EDIT BUTTON */}
                            <button style={{ background:color1 }} className='px-3 py-2 rounded-md hover:scale-105 text-base sm:text-lg md:text-xl'
                                onMouseOver={() => setColor1(`${theme.hover_color}`)}
                                onMouseOut={() => setColor1(`${theme.block_color}`)}
                                onClick={() => editDocument(id, title, content, setNotification, nav)}
                            > 
                                <FontAwesomeIcon icon={faFloppyDisk} style={{ color:`${theme.primary_text}`}}/> 
                                &nbsp; Edit
                            </button>

                            &emsp;

                            {/* DELETE BUTTON */}
                            <FontAwesomeIcon icon={faTrashCan}
                                style={{ background:iconBg, color:iconText, border:iconBorder }}
                                onMouseOver={() => {
                                    setIconBg('white');
                                    setIconText('red');
                                    setIconBorder('1px solid red')
                                }}
                                onMouseOut={() => {
                                    setIconBg('transparent');
                                    setIconText(`${theme.primary_text}`);
                                    setIconBorder(`1px solid ${theme.primary_text}`);
                                }}
                                onClick={handleDeleteClick} 
                                className="px-3 py-2 rounded-md hover:scale-105 hover:cursor-pointer text-base sm:text-lg md:text-xl"
                            />

                        </div>
                    </div>

                    <div className='pb-[2vh] h-[8vh] px-8 flex items-center justify-end'>

                        {/* DOWNLOAD */}
                        <FontAwesomeIcon icon={faDownload} 
                            style={{ background:color3, color:`${theme.primary_text}`, border:`1px solid ${theme.primary_text}` }}
                            onMouseOver={() => setColor3(`${theme.hover_color}`)}
                            onMouseOut={() => setColor3('transparent')}
                            onClick={() => downloadPDF(content, font)}
                            // onClick={handleDownload}
                            className="rounded-md mr-4 p-2 sm:px-3 hover:cursor-pointer hover:scale-105 text-base sm:text-xl"
                        />
                        
                        <FontAwesomeIcon icon="bars"
                            style={{ background:color2, color:`${theme.primary_text}`, border:`1px solid ${theme.primary_text}` }}
                            onMouseOver={() => setColor2(`${theme.hover_color}`)}
                            onMouseOut={() => setColor2('transparent')}
                            onClick={CollapseFunction}
                            className="rounded-md p-2 sm:px-3 hover:cursor-pointer hover:scale-105 text-base sm:text-xl"
                        />
                    </div>
                    
                    <Editor value={content} onChange={setContent} />

                </div>

                <div style={{ background:`${theme.nav_color}`, display:isCollapsed }} className='bg-white block sm:w-[400px] h-screen p-4'>
                    <h1> Shared with : </h1>
                </div>

            </div>
        </>
    )
}

export default ReadDoc