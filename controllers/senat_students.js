const Senate_Students = require('../models/Senate_Students');

const getAll = (req, res) => {
    Senate_Students.find()
        .exec()
        .then(senate_students => res.json(senate_students))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    Senate_Students.create(req.body)
        .then(createdSenate_Students => res.json(createdSenate_Students))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    Senate_Students.findOneAndUpdate ({ id: req.params.id}, req.body)
        .exec()
        .then(senate_students => res.json(senate_students))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Senate_Students.deleteOne ({ id: req.params.id})
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


