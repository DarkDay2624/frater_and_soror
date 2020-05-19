const express = require('express');
const Fraternity = require('../controllers/fraternity');
const passport = require('passport');
const router = express.Router();

//localhost:5000/Fraternity/getAll
router.get('/getAll', passport.authenticate('jwt', {session: false}), Fraternity.getAll);

//localhost:5000/Fraternity/create
router.post('/create', passport.authenticate('jwt', {session: false}), Fraternity.create);

//localhost:5000/Fraternity/update/1
router.put('/update/:id', passport.authenticate('jwt', {session: false}), Fraternity.update);

//localhost:5000/Fraternity/remove/1
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}), Fraternity.remove);

module.exports = router;