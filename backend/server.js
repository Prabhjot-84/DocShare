import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

import http from 'http';
import { Server } from 'socket.io';

import { createDoc } from './controller/create.js';
import { getDocById, getDocumentsByUser } from './controller/read.js';
import { updateDocById } from './controller/update.js';
import { deleteDocById } from './controller/delete.js';


const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, { /* options */ }); // Create Socket.io server

const PORT = process.env.PORT || 5000;


app.use(cors()); // Enables Cross-Origin Resource Sharing

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173', // For local development
  'https://doc-share.netlify.app' // Your deployed frontend
];

app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // Allow the request if the origin is in the allowed list or if there's no origin (i.e., server-side requests)
      callback(null, true);
    } else {
      // Reject the request if the origin is not allowed
      callback(new Error('CORS policy does not allow this origin'), false);
    }
  }
}));

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
