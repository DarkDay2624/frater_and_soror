const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createEventSchema = new Schema({
    id: {type: Number},
    nameOfEvent: {type: String, required: [true, "Fill in the field"]},
    dateOfEvent: {type: Date, required: [true, "Fill in the field"]},
    idFraternity: {type: Number},
    infoOfEvent: {type: String},
    address: {type: String, required: [true, 'Fill in the field']},
});

module.exports = CreateEvent = mongoose.model('CreateEvent', createEventSchema);