const express = require('express');
require('dotenv').config();
const Connection = require('./Database/database');
const app = express();
const customerRoutes = require('./Routes/customersRoute');
const transactionRoutes = require('./Routes/transactionsRoute');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//using public folder
app.use(express.static(__dirname + '/Public'));

//setting ejs as view engine
app.set('view engine', 'ejs');

//Connecting to the database and the server
Connection(app);

//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(customerRoutes);
app.use(transactionRoutes);