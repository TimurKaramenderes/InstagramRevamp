// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const Images = require('../models/modelImg');

const registerImg = (req, res) => {
    
            const url = req.body.url;
            const description = req.body.description;
            const likes = 0;
            const user = req.body.user;

            const newImage = new Images ({   
                url,
                description,
                likes,
                user
            });

            newImage.save()
                .then(() => res.json('Image added'))
                .catch(err => res.status(400).json('Error' +err))
};

const imgByUser = (req, res) => {
   Images.find({user : req.params.user})
    .then((result) => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
};

const updateLike = (req, res) => {

   Images.findOneAndUpdate({_id : req.body._id}, {$inc: {likes : +1}})
   .then((result) => res.json(result))
   .catch(err => res.status(400).json('Error'+err))
}

module.exports ={
    imgByUser,
    registerImg,
    updateLike
};
