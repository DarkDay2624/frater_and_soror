const express = require('express');
const AttendanceEvent = require('../controllers/attendanceEvent');
const passport = require('passport');
const router = express.Router();

//localhost:5000/AttendanceEvent/getAll
router.get('/getAll', passport.authenticate('jwt', {session: false}), AttendanceEvent.getAll);

//localhost:5000/AttendanceEvent/create
router.post('/create', passport.authenticate('jwt', {session: false}), AttendanceEvent.create);

//localhost:5000/AttendanceEvent/update/1
router.put('/update/:id', passport.authenticate('jwt', {session: false}), AttendanceEvent.update);

//localhost:5000/AttendanceEvent/remove/1
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}),AttendanceEvent.remove);

module.exports = router;