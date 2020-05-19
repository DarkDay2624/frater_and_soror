const express = require('express');
const Rulebook = require('../controllers/rulebook');
const passport = require('passport');
const router = express.Router();

//localhost:5000/Rulebook/getAll
router.get('/getAll', passport.authenticate('jwt', {session: false}), Rulebook.getAll);

//localhost:5000/Rulebook/create
router.post('/create', passport.authenticate('jwt', {session: false}), Rulebook.create);

//localhost:5000/Rulebook/update/1
router.put('/update/:id', passport.authenticate('jwt', {session: false}), Rulebook.update);

//localhost:5000/Rulebook/remove/1
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}), Rulebook.remove);

module.exports = router;