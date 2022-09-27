const router = require('express').Router();
const auth = require ('../middleware/auth');
const {loginUser, registerUser} = require('../controllers/controlUser');

router.post('/registerUser', registerUser);

router.post('/login', loginUser);

module.exports = router; 