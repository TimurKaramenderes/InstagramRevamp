require('dotenv').config();
const mongoose = require("mongoose");
const mongoDB = process.env.DBurl;

const quoteDB = mongoose.createConnection(mongoDB);

const SubComments = quoteDB.model(
    'SubComments',
    new mongoose.Schema({
    content : {
        type : String
    },
    user : {
        type : mongoose.Schema.Types.ObjectId, ref : 'users'
    },
    comment : {
        type : mongoose.Schema.Types.ObjectId, ref : 'comments'
    }
},
{ timestamps : true }, 
{collection: 'subComm'})
);

module.exports = SubComments;