const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentsSchema = new Schema({
    id: {type: Number},
    FIO: {type: String, required: [true, 'Fill in the field']},
    birthday: {type: Date},
    colleague: {type: String},
    idFraternity: {type: Number},
});

module.exports = Students = mongoose.model('Students', StudentsSchema);