const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ruleSchema = new Schema({
    id: {type: Number},
    idRulebook: {type: Number},
    nameOfRule: {type: String, required: [true, "Fill in the field"]},
    infoOfRule: {type: String, required: [true, "Fill in the field"]}
});

module.exports = Rule = mongoose.model('Rule', ruleSchema);