const express = require('express');
//const connectDB = require('./config/db');
// var cors = require('cors');
// var cors = require('cors');
const path = require('path'); //NodeJS path module is a core built-in module. It provides functionalities for accessing and interacting with files. It provides users a way of working with file paths and directories.

const app = express();

// Connect the database
// connectDB();

// // Init middleware
// app.use(express.json({ extended: false })); // this allows us to access the body in request



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get('/', (req, res) => res.send('API Running'));

// app.use(cors());

// app.use(cors());