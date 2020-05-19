const express = require('express');
const Senate_Students = require('../controllers/senat_students');
const passport = require('passport');
const router = express.Router();

//localhost:5000/Senate_Students/getAll
router.get('/getAll', passport.authenticate('jwt', {session: false}), Senate_Students.getAll);

//localhost:5000/Senate_Students/create
router.post('/create', passport.authenticate('jwt', {session: false}), Senate_Students.create);

//localhost:5000/Senate_Students/update/1
router.put('/update/:id', passport.authenticate('jwt', {session: false}), Senate_Students.update);

//localhost:5000/Senate_Students/remove/1
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}), Senate_Students.remove);

module.exports = router;