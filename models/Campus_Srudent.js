const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campus_StudentSchema = new Schema({
    id: {type: Number},
    nameOfCampus: {type: String, required: [true, 'Fill in the field']},
    idCampus: {type: Number},
    idStudents: {type: Number}
});

module.exports = Campus_Studetn = mongoose.model('Campus_Student', campus_StudentSchema);