const mongoose = require('mongoose');
require('dotenv').config();

const connection = (app) => {
    mongoose.connect(process.env.DB_ACCESS, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
    .then(result => {
        app.listen(5000, () => {
            console.log("Connected to the server");
        });
    }).catch(err => {
        console.log(err.message);
    });

    mongoose.connection.on('connected', () => {
        console.log("connected to the database");
    })
}

module.exports = connection;
