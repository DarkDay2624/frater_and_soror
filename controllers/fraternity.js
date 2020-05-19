const Fraternity = require('../models/Fraternity');

const getAll = (req, res) => {
    Fraternity.find()
        .exec()
        .then(fraternity => res.json(fraternity))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    Fraternity.create(req.body)
        .then(createdFraternity => res.json(createdFraternity))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    Fraternity.findOneAndUpdate ({ id: req.params.id}, req.body)
        .exec()
        .then(fraternity => res.json(fraternity))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Fraternity.deleteOne ({ id: req.params.id})
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


