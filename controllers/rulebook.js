const Rulebook = require('../models/Rulebook');

const getAll = (req, res) => {
    Rulebook.find()
        .exec()
        .then(rulebook => res.json(rulebook))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    Rulebook.create(req.body)
        .then(createdRulebook => res.json(createdRulebook))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    Rulebook.findOneAndUpdate ({ id: req.params.id}, req.body)
        .exec()
        .then(rulebook => res.json(rulebook))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Rulebook.deleteOne ({ id: req.params.id})
        .exec()
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json(err))
};

module.exports = {
    getAll,
    create,
    update,
    remove
};


