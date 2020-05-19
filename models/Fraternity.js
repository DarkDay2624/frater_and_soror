const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FraternitySchema = new Schema({
    id: {type: Number},
    course: {type: String, required: [true, 'Fill in the field']},
    gender: {type: String, required: [true, 'Fill in the field']},
    dateOfFoundation: {type: Date, required: [true, 'Fill in the field']},
    nameOfFraternity: {type: String, required: [true, 'Fill in the field']},
    idColleague: {type: Number}
})

module.exports = Fraternity = mongoose.model('Fraternity', FraternitySchema);