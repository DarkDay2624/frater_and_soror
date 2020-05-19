const express = require('express');
const CreateEvent = require('../controllers/createEvent');
const passport = require('passport');
const router = express.Router();

//localhost:5000/CreateEvent/getAll
router.get('/getAll', passport.authenticate('jwt', {session: false}), CreateEvent.getAll);

//localhost:5000/CreateEvent/create
router.post('/create', passport.authenticate('jwt', {session: false}), CreateEvent.create);

//localhost:5000/CreateEvent/update/1
router.put('/update/:id', passport.authenticate('jwt', {session: false}), CreateEvent.update);

//localhost:5000/CreateEvent/remove/1
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}),CreateEvent.remove);

module.exports = router;