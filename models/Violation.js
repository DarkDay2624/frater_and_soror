const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const violationSchema = new Schema({
    id: {type: Number},
    idStudents: {type: Number},
    idRule: {type: Number},
    infoOfViolation: {type: String}
});

module.exports = Violation = mongoose.model('Violation', violationSchema);