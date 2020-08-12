// Env
const dotenv = require('dotenv');
dotenv.config();

// Express
const express = require('express');
const app = express();

// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// View engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', { hello: 'Hello world' });
});

// Server
app.listen(process.env.PORT, () => {
    console.log('Server is up and running on port ' + process.env.PORT);
});