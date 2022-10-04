const router = require('express').Router();
const auth = require ('../middleware/auth');
const {loginUser, registerUser, getAllUser} = require('../controllers/controlUser');
const { registerImg, imgByUser } = require('../controllers/controlImg');
const { registerComm, commentByUser, commentByImg } = require('../controllers/controlComment');
const { registerSubComm, subCommByUser, subCommByComm } = require('../controllers/controlSubComm');

router.post('/registerUser', registerUser);
router.post('/login', loginUser);

router.post('/registerImg', auth, registerImg);
router.get('/imgByUser/:user', auth, imgByUser);

router.get('/get', (req, res) => {
  getAllUser()
  .then((response) => res.status(200).json({users: response, message: "ok" }))
  .catch(error=> res.status(200).json({error: error, message: "notok"}))
});

router.post('/registerComm', registerComm);
router.get('/commByUser/:user', commentByUser);
router.get('/commByImg/:image', commentByImg);

router.post('/registerSubComm', registerSubComm);
router.get('/subCommByUser/:user', subCommByUser);
router.get('/subCommByComm/:comment', subCommByComm);

module.exports = router; 