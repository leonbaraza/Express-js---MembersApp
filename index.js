const express = require('express');
const path = require('path')

const app = express();

const members = [
    {
        id:1,
        name : 'Leon Wakoli',
        email : 'leonbaraza@gmail.com',
        status : 'active'
    },
    {
        id : 2,
        name : 'Salome Wamachaba',
        email : 'wamachaba@gmail.com',
        status : 'inactive'
    },
    {
        id : 3,
        name : 'Patrick Wafula',
        email : 'pat@gmail.com',
        status : 'active'
    }
]

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