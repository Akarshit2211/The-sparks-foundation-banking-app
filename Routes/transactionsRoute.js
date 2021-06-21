const express = require('express');
const { findOneAndUpdate } = require('../Model/Transfers');
const Transaction = require('../Model/Transfers');
const Customer = require('../Model/Customers');
const Router = express.Router();

Router.get('/transfer/:from', (req, res) => {
    Customer.find({})
    .then(response => {
        res.render('Transfer', {customers: response, from: req.params.from});
    }).catch(err => console.log(err.message));
})

Router.get('/transactions', (req, res) => {
    Transaction.find({})
    .then(response => {
        res.render('Transactions', {transactions: response});
    }).catch(err => console.log(err.message));
})

Router.post('/addTransaction/:from', (req, res) => {
    Transaction.create({
        sender: req.params.from,
        receiver: req.body.receiver,
        amount: Number(req.body.amount)
    }).then(response => {
        res.redirect("http://localhost:5000/");
    }).catch(err => err.message);
})

module.exports = Router;