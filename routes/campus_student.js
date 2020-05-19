const express = require('express');
const Campus_Student = require('../controllers/campus_Student');
const passport = require('passport');
const router = express.Router();

//localhost:5000/Campus_Student/getAll
router.get('/getAll', passport.authenticate('jwt', {session: false}), Campus_Student.getAll);

//localhost:5000/Campus_Student/create
router.post('/create', passport.authenticate('jwt', {session: false}), Campus_Student.create);

//localhost:5000/Campus_Student/update/1
router.put('/update/:id', passport.authenticate('jwt', {session: false}), Campus_Student.update);

//localhost:5000/Campus_Student/remove/1
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}), Campus_Student.remove);

module.exports = router;