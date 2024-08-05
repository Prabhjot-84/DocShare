import axios from 'axios';

export const deleteDocument = async (id, setNotification, nav) => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    
    try {
        const response = await axios.delete(`${API_URL}/doc/${id}`);
        // Optionally, you could add a callback to refresh the list of documents after deletion
        console.log('Document deleted successfully');
        if( response.status === 200 )
            {
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
        console.error('Error deleting document:', error);
        setNotification({
            type: 'error',
            message: 'Error! Please try again.',
        });
    }
};