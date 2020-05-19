const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceEventSchema = new Schema({
    id: {type: Number},
    idEvent: {type: Number},
    ItStudents: {type: Number},
    attendance: {type: Boolean}
});

module.exports = AttendanceEvent = mongoose.model('AttendanceEvent', attendanceEventSchema);