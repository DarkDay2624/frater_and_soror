const express = require('express');
const auth = require('../controllers/auth');
const router = express.Router();

//localhost:5000/auth/login
router.post('/login', auth.login);

//localhost:5000/auth/register
router.post('/register', auth.register);

module.exports = router;