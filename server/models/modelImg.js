require('dotenv').config();
const mongoose = require("mongoose");
const mongoDB = process.env.DBurl;

const quoteDB = mongoose.createConnection(mongoDB);

const Images = quoteDB.model(
    'Images',
    new mongoose.Schema({
    url : {
        type : String
    },
    description : {
        type : String
    },
    user : {
        type : mongoose.Schema.Types.ObjectId, ref : 'users'
    },
    likes : {
        type : Number
    },
    password : {
        type : String
    }    
},
{ timestamps : true }, 
{collection: 'images'})
);

module.exports = Images;