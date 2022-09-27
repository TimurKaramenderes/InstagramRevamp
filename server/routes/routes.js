const router = require('express').Router();
const auth = require ('../middleware/auth');
const {loginUser, registerUser} = require('../controllers/controlUser');
const { registerImg, imgByUser } = require('../controllers/controlImg');

router.post('/registerUser', registerUser);
router.post('/login', loginUser);

router.post('/registerImg', registerImg);
router.get('/imgByUser/:user', imgByUser);

module.exports = router; 