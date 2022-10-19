require('dotenv').config();
const mongoose = require("mongoose");
const mongoDB = process.env.DBurl;

const quoteDB = mongoose.createConnection(mongoDB);

const Users = quoteDB.model(
    'Users',
    new mongoose.Schema({
    username : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
}, 
{ timestamps : true }, 
{collection: 'users'})
);

module.exports = Users;