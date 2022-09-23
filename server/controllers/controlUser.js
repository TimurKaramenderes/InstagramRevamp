const bcrypt = require('bcrypt');
let Users = require("../models/modelUser");

const saltRounds = 10;

const registerUser = (req, res) => {
    
    Users.findOne({email : req.body.email}).then((user)=>{
        if(user) {
            return res.status(400).json({email : "email already registred"})

        }else {
            const name = req.body.name;
            const lastname = req.body.lastname;
            const username = req.body.username;
            const email = req.body.email;
            const password = req.body.password;

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

module.exports = registerUser;
//     getAllUser,

//     getUser
