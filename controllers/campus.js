const Campus = require('../models/Campus');

const getAll = (req, res) => {
    Campus.find()
        .exec()
        .then(campus => res.json(campus))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    Campus.create(req.body)
        .then(createdCampus => res.json(createdCampus))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    Campus.findOneAndUpdate ({ id: req.params.id}, req.body)
        .exec()
        .then(campus => res.json(campus))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Campus.deleteOne ({ id: req.params.id})
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


