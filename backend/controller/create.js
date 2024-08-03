import DocumentModel from "../models/Document.js";

//  CREATE  DOCUMENT 

export const createDoc = async(req, res) => {

    try{
        const { title, content, userId } = req.body;
        if (!title || !content || !userId) {
            return res.status(400).json({ message: 'Title, content, and userId are required.' });
        }
        // Create a new document
        const newDocument = new DocumentModel({
            title,
            content,
            userId
        });
        // Save the document to the database
        const savedDocument = await newDocument.save();
        res.status(201).json(savedDocument);
    }

    catch{
        console.error('Error creating document:', error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
}