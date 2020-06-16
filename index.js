const express = require('express');
const path = require('path');

const logger = require('./middleware/logger')

const app = express();

// Middleware

// Init middleware 
// app.use(logger);

// Creating a middleware
app.use(express.static(path.join(__dirname,'public')));

app.use('/api/members', require('./routes/api/members'));

// Sending a file
// app.get('/',  (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>console.log(`Server started on post ${PORT}`));