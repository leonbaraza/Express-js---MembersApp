const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members')

const logger = require('./middleware/logger')

const app = express();

// Middleware

// Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

// Rendering views
// Home Page route
app.get('/', (req, res) => res.render('index', {
    title : 'Member App',
    members
}));

// Init middleware 
// app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// Creating a middleware
app.use(express.static(path.join(__dirname,'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

// Sending a file
// app.get('/',  (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>console.log(`Server started on post ${PORT}`));