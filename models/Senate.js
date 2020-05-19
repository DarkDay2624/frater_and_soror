const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const senateSchema = new Schema({
    id: {type: Number},
    idFraternity: {type: Number},
    nameOfSenate: {type: String, required: [true, "Fill in the field"]}
});

module.exports = Senate = mongoose.model('Senate', senateSchema);