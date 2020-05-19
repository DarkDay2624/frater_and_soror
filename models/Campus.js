const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campusSchema = new Schema({
    id: {type: Number},
    address: {type: String, required: [true, 'Fill in the field']},
    cost: {type: mongoose.Schema.Types.Decimal128, required: [true, 'Fill in the field']},
    idFraternity: {type: Number},
    idStudents: {type: Number}
});

module.exports = Campus = mongoose.model('Campus', campusSchema);