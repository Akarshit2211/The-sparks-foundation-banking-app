const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    transactionDated: {
        type: Date,
        default: () => Date.now() + 7*24*60*60*1000
    }
})

const Transaction = mongoose.model("Transactions", transactionSchema);

module.exports = Transaction;