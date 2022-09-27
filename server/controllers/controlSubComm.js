const SubComments = require('../models/modelSubComm');

const registerSubComm = (req, res) => {
    
            const content = req.body.content;
            const user = req.body.user;
            const comment = req.body.comment;

            const newSubComm = new SubComments ({   
                content,
                user,
                comment
            });

            newSubComm.save()
                .then(() => res.json('Comment added'))
                .catch(err => res.status(400).json('Error' +err))
};

const subCommByUser = (req, res) => {
   SubComments.find({user : req.params.user})
    .then((result) => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
};

const subCommByComm = (req, res) => {
    SubComments.find({comment : req.params.comment})
     .then((result) => res.json(result))
     .catch(err => res.status(400).json('Error'+err))
 };

module.exports = {
    registerSubComm,
    subCommByUser,
    subCommByComm
};