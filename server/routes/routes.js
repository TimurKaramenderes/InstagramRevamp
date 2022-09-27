const router = require('express').Router();
const auth = require ('../middleware/auth');
const {loginUser, registerUser} = require('../controllers/controlUser');
const { registerImg, imgByUser } = require('../controllers/controlImg');
const { registerComm, commentByUser, commentByImg } = require('../controllers/controlComment');
const { registerSubComm, subCommByUser, subCommByComm } = require('../controllers/controlSubComm');

router.post('/registerUser', registerUser);
router.post('/login', loginUser);

router.post('/registerImg', registerImg);
router.get('/imgByUser/:user', imgByUser);

router.post('/registerComm', registerComm);
router.get('/commByUser/:user', commentByUser);
router.get('/commByImg/:image', commentByImg);

router.post('/registerSubComm', registerSubComm);
router.get('/subCommByUser/:user', subCommByUser);
router.get('/subCommByComm/:comment', subCommByComm);

module.exports = router; 