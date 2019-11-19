// module
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Query string to connect to MongoDB server
// const DB_URI = 'mongodb://localhost:27017/graphql-app'; // for local
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const DB_URI =  `mongodb+srv://${ DB_USER }:${ DB_PASSWORD }@${DB_HOST}/test?retryWrites=true&w=majority`

// Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Basic event listeners on the mongoose.connection object
mongoose.connection.once('open', () => console.log('Connected to a MongoDB instance'));
mongoose.connection.on('error', (error: any) => console.error(error));

export default mongoose;