const Rule = require('../models/Rule');

const getAll = (req, res) => {
    Rule.find()
        .exec()
        .then(rule => res.json(rule))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    Rule.create(req.body)
        .then(createdRule => res.json(createdRule))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    Rule.findOneAndUpdate ({ id: req.params.id}, req.body)
        .exec()
        .then(rule => res.json(rule))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Rule.deleteOne ({ id: req.params.id})
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


