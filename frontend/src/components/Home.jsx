import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';

import Navbar from './Navbar';
import DocFolder from './DocFolder';

const Home = () => {
    
    // getting userID from clerk
    const { user } = useUser();

    if (!user) {
        return <div>Loading...</div>;
    }
    const userId = user.id;

    const [documents, setDocuments] = useState([]);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await axios.get(`${API_URL}/documents/${userId}`);
                setDocuments(response.data);
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
        };

        fetchDocuments();
    }, [userId]);

    return (
        <>
            <Navbar />
            <div className='p-8 h-[90vh] sm:h-[88vh] overflow-y-scroll'>
                <div className='grid grid-cols-[repeat(auto-fit,minmax(325px,1fr))] gap-4 md:gap-y-8 justify-center items-center'>
                    {documents.map(doc => (
                        <DocFolder key={doc._id} document={doc} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
