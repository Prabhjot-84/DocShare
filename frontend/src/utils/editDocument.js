import axios from 'axios';

export const editDocument = async (id, title, content, setNotification, nav) => {

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    
    try {
        const updatedDocument = {
            title,
            content,
        };
        const response = await axios.put(`${API_URL}/doc/${id}`, updatedDocument);
        
        if( response.status === 200 )
        {
            setNotification({
                type: 'success',
                message: 'Action completed successfully!',
            });
            
            // Redirect to the main page (home page) on success after a delay
            setTimeout(() => {
                nav('/');
            }, 3000);

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