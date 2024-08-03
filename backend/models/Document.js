import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Defining the schema for documents
const DocumentSchema = new Schema({
    title: { type: String, required: true }, // Title is required
    content: { type: String, required: true }, // Content is required
    userId: { type: String, required: true }, // User ID is required
}, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
});

// Creating the Document model based on the schema
const DocumentModel = model('Document', DocumentSchema);

export default DocumentModel; // Exporting the model for use in other files