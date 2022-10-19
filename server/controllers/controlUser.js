const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let Users = require("../models/modelUser");

const saltRounds = 10;

const registerUser = (req, res) => {

    Users.findOne({email : req.body.email}).then((user)=>{
        if(user) {
            return res.status(400).json({email : "email already registered"});

        }else {
            const username = req.body.username;
            const email = req.body.email;
            const password = req.body.password;
            const confirmPwd = req.body.confirmPwd;

            if(password !== confirmPwd) {
                return res.status(400).json({msg : "passwords dont match"});
            }
            
            const newUsers = new Users ({   
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
    })
}


const loginUser = (req, res) => {

  Users.findOne({email : req.body.email})
    .then((user)=>{
      if(!user){
        return res.status(400).json({msg : "that email is not registered"});
      }
      bcrypt.compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({error: new Error('Incorrect password!')});
          }
          const token = jwt.sign({ userId: user._id },'RANDOM_TOKEN_SECRET', { expiresIn: '24h' });
          res.status(200).json({
            userId: user._id, 
            token: token
          });
        })
       .catch((error) => {
          res.status(500).json({error: error});
        });
  })
  .catch(err => res.status(400).json('Error' +err));
}

const getAllUser = () =>
  new Promise((resolve, reject) => {
    Users.find()
      .then((response) => {resolve(response)})
      .catch((error) => {reject(error)})
  });
    // Users.find()
    // .then(result => res.status(200).json(result))
    // .catch(err => res.status(400).json('Error'+err));


    const deleteUser = (req, res) =>{
      Users.findByIdAndDelete({_id : req.params._id})
      .then(() => res.json("User delete"))
      .catch(err => res.status(400).json('Error'+err))
  }

module.exports = {
    registerUser,
    loginUser,
    getAllUser,
    deleteUser
}

