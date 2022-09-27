const Comments = require('../models/modelComment');

const registerComm = (req, res) => {
    
            const content = req.body.content;
            const user = req.body.user;
            const image = req.body.image;

            const newComment = new Comments ({   
                content,
                user,
                image
            });

            newComment.save()
                .then(() => res.json('Comment added'))
                .catch(err => res.status(400).json('Error' +err))
};

const commentByUser = (req, res) => {
   Comments.find({user : req.params.user})
    .then((result) => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
};

const commentByImg = (req, res) => {
    Comments.find({image: req.params.image})
    .then((result) => res.json(result))
    .catch(err => res.status(400).json('Error'+err))
};

module.exports ={
    registerComm,
    commentByImg,
    commentByUser
};