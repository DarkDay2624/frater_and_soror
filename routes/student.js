const express = require('express');
const Students = require('../controllers/students');
const passport = require('passport');
const router = express.Router();

//localhost:5000/Students/getAll
router.get('/getAll', passport.authenticate('jwt', {session: false}), Students.getAll);

//localhost:5000/Students/create
router.post('/create', passport.authenticate('jwt', {session: false}), Students.create);

//localhost:5000/Students/update/1
router.put('/update/:id', passport.authenticate('jwt', {session: false}), Students.update);

//localhost:5000/Students/remove/1
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}), Students.remove);

module.exports = router;