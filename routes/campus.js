const express = require('express');
const Campus = require('../controllers/campus');
const passport = require('passport');
const router = express.Router();

//localhost:5000/Campus/getAll
router.get('/getAll', passport.authenticate('jwt', {session: false}), Campus.getAll);

//localhost:5000/Campus/create
router.post('/create', passport.authenticate('jwt', {session: false}), Campus.create);

//localhost:5000/Campus/update/1
router.put('/update/:id', passport.authenticate('jwt', {session: false}), Campus.update);

//localhost:5000/Campus/remove/1
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}),Campus.remove);

module.exports = router;