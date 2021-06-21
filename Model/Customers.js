const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for Customers models
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true,
        unique: true
    },
    currentBalance: {
        type: Number,
        required: true,
        min: 0
    },
    accountNumber: {
        type: Number,
        required: true,
        unique: true
    }
});

const Customer = mongoose.model("Customers", userSchema);

module.exports = Customer;