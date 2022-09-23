const router = require('express').Router();
const registerUser = require('../controllers/controlUser');

router.post('/registerUser', registerUser);

module.exports = router; 