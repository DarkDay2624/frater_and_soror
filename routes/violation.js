const express = require('express');
const Violation = require('../controllers/violation');
const passport = require('passport');
const router = express.Router();

//localhost:5000/Violation/getAll
router.get('/getAll', passport.authenticate('jwt', {session: false}), Violation.getAll);

//localhost:5000/Violation/create
router.post('/create', passport.authenticate('jwt', {session: false}), Violation.create);

//localhost:5000/Violation/update/1
router.put('/update/:id', passport.authenticate('jwt', {session: false}), Violation.update);

//localhost:5000/Violation/remove/1
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}), Violation.remove);

module.exports = router;