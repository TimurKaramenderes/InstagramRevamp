const router = require('express').Router();
const auth = require ('../middleware/auth');
const {loginUser, registerUser, getAllUser, deleteUser} = require('../controllers/controlUser');
const { registerImg, imgByUser, updateLike, deleteImg } = require('../controllers/controlImg');
const { registerComm, commentByUser, commentByImg } = require('../controllers/controlComment');
const { registerSubComm, subCommByUser, subCommByComm } = require('../controllers/controlSubComm');

router.post('/registerUser', registerUser);
router.post('/login', loginUser);
router.delete('/deleteUser/:_id', deleteUser);

router.post('/registerImg', auth, registerImg);
router.get('/imgByUser/:user', imgByUser);
router.put('/updateLike', updateLike);
router.delete('/deleteImg/:_id',auth, deleteImg);

router.get('/get', (req, res) => {
  getAllUser()
  .then((response) => res.status(200).json({users: response, message: "ok" }))
  .catch(error=> res.status(200).json({error: error, message: "notok"}))
});

router.post('/registerComm', auth, registerComm);
router.get('/commByUser/:user', commentByUser);
router.get('/commByImg/:image', commentByImg);

router.post('/registerSubComm',auth, registerSubComm);
router.get('/subCommByUser/:user', subCommByUser);
router.get('/subCommByComm/:comment', subCommByComm);

module.exports = router; 