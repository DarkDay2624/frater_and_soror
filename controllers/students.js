const mongoose = require('mongoose');
const Students = require('../models/Students');

const getAll = (req, res) => {
    Students.find()
        .exec()
        .then(students => res.json(students))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
   Students.create(req.body)
        .then(createdStudents => res.json(createdStudents))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    Students.findOneAndUpdate ({ id: req.params.id}, req.body)
        .exec()
        .then(students => res.json(students))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Students.deleteOne ({ id: req.params.id})
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


