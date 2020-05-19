const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const senate_StudentsSchema = new Schema({
    id: {type: Number},
    idSenate: {type: Number},
    idStudents: {type: Number},
    position: {type: String, required: [true, "Fill in the field"]}
});

module.exports = Senate_Students = mongoose.model('Senate_Students', senate_StudentsSchema);