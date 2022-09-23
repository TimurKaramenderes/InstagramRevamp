require('dotenv').config();
const mongoose = require("mongoose");
const mongoDB = process.env.DBurl;

const quoteDB = mongoose.createConnection(mongoDB);

const Comments = quoteDB.model(
    'Comments',
    new mongoose.Schema({
    content : {
        type : String
    },
    user : {
        type : mongoose.Schema.Types.ObjectId, ref : 'users'
    },
    image : {
        type : mongoose.Schema.Types.ObjectId, ref : 'images'
    }
},
{ timestamps : true }, 
{collection: 'comments'})
);

module.exports = Comments;