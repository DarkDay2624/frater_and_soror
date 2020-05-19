const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colleagueSchema = new Schema({
    id: {type: Number},
    NameOfColleague: {type: String}
});

module.exports = Colleague = mongoose.model('Colleague', colleagueSchema);