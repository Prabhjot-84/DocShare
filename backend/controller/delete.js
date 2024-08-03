import DocumentModel from '../models/Document.js';

export const deleteDocById = async (req, res) => {
    
    try {
        const { id } = req.params;
        const deletedDocument = await DocumentModel.findByIdAndDelete(id);

        if (!deletedDocument) {
            return res.status(404).json({ message: 'Document not found' });
        }

        res.status(200).json({ message: 'Document deleted successfully' });
    } 
    
    catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
}