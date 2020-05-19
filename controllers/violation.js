const mongoose = require('mongoose');
const Violation = require('../models/Violation');

const getAll = (req, res) => {
    Violation.find()
        .exec()
        .then(violation => res.json(violation))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    Violation.create(req.body)
        .then(createdViolation => res.json(createdViolation))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    Violation.findOneAndUpdate ({ id: req.params.id}, req.body)
        .exec()
        .then(violation => res.json(violation))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Violation.deleteOne ({ id: req.params.id})
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


