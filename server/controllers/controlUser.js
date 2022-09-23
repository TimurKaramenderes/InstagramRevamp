const bcrypt = require('bcrypt');
const { deleteOne } = require('../models/modelUser');
let Users = require("../models/modelUser");

const saltRounds = 10;

const registerUser = (req, res) => {
    
    Users.findOne({email : req.body.email}).then((user)=>{
        if(user) {
            return res.status(400).json({email : "email already registered"});

        }else {
            const name = req.body.name;
            const lastname = req.body.lastname;
            const username = req.body.username;
            const email = req.body.email;
            const password = req.body.password;
            const confirmPwd = req.body.confirmPwd;

            if(password !== confirmPwd) {
                return res.status(400).json({msg : "passwords dont match"});
            }
            
            const newUsers = new Users ({   
                name,
                lastname,
                username,
                email,
                password,
            });

            bcrypt.hash(password, saltRounds, function(err, hash) {
                if(err) throw err;
                newUsers.password = hash;
                newUsers.save()
                .then(() => res.json('User added'))
                .catch(err => res.status(400).json('Error' +err))
            }); 
  
        };
    });
};

const loginUser = (req, res) => {

     Users.findOne({email : req.params.email})
        .then((user)=>{
            if(!user){
                return res.status(400).json({msg : "that email is not registered"});
            }
        bcrypt.compare(req.params.password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if(isMatch) {
                return res.json('password is correct');
            } else {
                return res.status(400).json({msg : "password is incorrect"});
            }
        })
        })
        .catch(err => res.status(400).json('Error' +err))
}

// const getAllUser = (req, res) => {
//     Users.find()
//     .then(result => res.json(result))
//     .catch(err => res.status(400).json('Error'+err))
// };

// const getUser = (req, res) => {
//     Users.find({user : req.params.user})
//     .then((result) => res.json(result))
//     .catch(err => res.status(400).json('Error'+err))
// };

module.exports = {
    registerUser,
    loginUser
}
