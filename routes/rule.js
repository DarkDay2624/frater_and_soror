const express = require('express');
const Rule = require('../controllers/rule');
const passport = require('passport');
const router = express.Router();

//localhost:5000/Rule/getAll
router.get('/getAll', passport.authenticate('jwt', {session: false}), Rule.getAll);

//localhost:5000/Rule/create
router.post('/create', passport.authenticate('jwt', {session: false}), Rule.create);

//localhost:5000/Rule/update/1
router.put('/update/:id', passport.authenticate('jwt', {session: false}), Rule.update);

//localhost:5000/Rule/remove/1
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}), Rule.remove);

module.exports = router;