//App dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const universities = require('./controllers/universities');
const config = require('./config/database');

//Connect mongoose to our database
mongoose.connect(config.database);

//Set port for the backend
const port = 3000;

//Use express for routing
const app = express();

//Middleware for CORS- cross-origin resource sharing
app.use(cors());

//Middleware for bodyparsing using both JSON and urlencoding
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Tells where to look for static files
app.use(express.static(path.join(__dirname, 'public')));

// Base url - eventually maybe API guide
app.get('/', (req, res) => {
	res.send('Online Universities API. See /universities');
})

app.use('/universities', universities)

app.listen(port, () => {
	console.log(`Starting server on port ${port}`);
})