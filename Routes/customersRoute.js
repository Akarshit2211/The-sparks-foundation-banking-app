const express = require('express');
const Customer = require('../Model/Customers');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('Home');
})

Router.get("/customers", (req, res) => {
    Customer.find({})
    .then(customers => {
        res.render('Customers', {customersArray: customers})
    }).catch(err => console.log(err.message));
})

Router.get('/viewCustomer/:account', (req, res) => {
    console.log(req.params.account)
    Customer.find({accountNumber: req.params.account})
    .then(response => {
        res.render('singleCustomer', {details: response})
    }).catch(err => err.message);
})

module.exports = Router;