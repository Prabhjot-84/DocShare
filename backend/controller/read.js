import DocumentModel from "../models/Document.js"; 

// Fetch documents by userId
export const getDocumentsByUser = async (req, res) => {
    const { userId } = req.params;
    
    try {
        const documents = await DocumentModel.find({ userId });
        if (documents.length === 0) {
            return res.status(404).json({ message: 'No documents found for this user.' });
        }
        res.status(200).json(documents);
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};

// GET DOCUMENT BY ID
export const getDocById = async (req, res) => {
    try {
        const { id } = req.params;
        const document = await DocumentModel.findById(id);

        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }

        res.status(200).json(document);
    } catch (error) {
        console.error('Error fetching document:', error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};