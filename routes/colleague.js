const express = require('express');
const Colleague = require('../controllers/colleague');
const passport = require('passport');
const router = express.Router();

//localhost:5000/Colleague/getAll
router.get('/getAll', passport.authenticate('jwt', {session: false}), Colleague.getAll);

//localhost:5000/Colleague/create
router.post('/create', passport.authenticate('jwt', {session: false}), Colleague.create);

//localhost:5000/Colleague/update/1
router.put('/update/:id', passport.authenticate('jwt', {session: false}), Colleague.update);

//localhost:5000/Colleague/remove/1
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}),Colleague.remove);

module.exports = router;