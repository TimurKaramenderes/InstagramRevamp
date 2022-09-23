const router = require('express').Router();
const auth = require ('../middleware/auth');
const {loginUser, registerUser} = require('../controllers/controlUser');

router.post('/registerUser', registerUser);

router.get('/loginUser/:email', loginUser);

module.exports = router; 