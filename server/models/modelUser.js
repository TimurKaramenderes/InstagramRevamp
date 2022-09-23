require('dotenv').config();
const mongoose = require("mongoose");
const mongoDB = process.env.DBurl;

const quoteDB = mongoose.createConnection(mongoDB);

const Users = quoteDB.model(
    'Users',
    new mongoose.Schema({
    name : {
        type : String
    },
    lastname : {
        type : String
    },
    username : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
}, {collection: 'users'})
);

module.exports = Users;