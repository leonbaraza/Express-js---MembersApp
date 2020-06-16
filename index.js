const express = require('express');
const path = require('path');

const members = require('./Members');
const logger = require('./middleware/logger')

const app = express();

// Middleware

// Init middleware 
app.use(logger);

// Gets all members
app.get('/api/members', (req, res) => res.json(members));

// Creating a middleware
app.use(express.static(path.join(__dirname,'public')))

// Sending a file
// app.get('/',  (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>console.log(`Server started on post ${PORT}`));