import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

import { createDoc } from './controller/create.js';
import { getDocById, getDocumentsByUser } from './controller/read.js';
import { updateDocById } from './controller/update.js';
import { deleteDocById } from './controller/delete.js';


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(express.json()); // Parses incoming JSON requests


// Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


//  CREATE
app.post('/create', createDoc);

//  GET DOCUMENTS
app.get('/documents/:userId', getDocumentsByUser);
app.get('/doc/:id', getDocById);

// UPDATE DOCUMENT
app.put('/doc/:id', updateDocById);

//DELETE DOCUMENT
app.delete('/doc/:id', deleteDocById);


// Starting the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
