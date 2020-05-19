const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rulebookSchema = new Schema({
    id: {type: Number},
    idFraternity: {type: Number},
    nameOfRulebook: {type: String, required: [true, "Fill in the field"]}
});

module.exports = Rulebook = mongoose.model('Rulebook', rulebookSchema);