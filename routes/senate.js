const express = require('express');
const Senate = require('../controllers/senate');
const passport = require('passport');
const router = express.Router();

//localhost:5000/Senate/getAll
router.get('/getAll', passport.authenticate('jwt', {session: false}), Senate.getAll);

//localhost:5000/Senate/create
router.post('/create', passport.authenticate('jwt', {session: false}), Senate.create);

//localhost:5000/Senate/update/1
router.put('/update/:id', passport.authenticate('jwt', {session: false}), Senate.update);

//localhost:5000/Senate/remove/1
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}), Senate.remove);

module.exports = router;