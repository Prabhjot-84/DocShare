import DocumentModel from "../models/Document.js"; 

export const updateDocById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const updatedDocument = await DocumentModel.findByIdAndUpdate(id, { title, content }, { new: true });

        if (!updatedDocument) {
            return res.status(404).json({ message: 'Document not found' });
        }

        res.status(200).json(updatedDocument);
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};
