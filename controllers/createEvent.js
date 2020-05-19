const CreateEvent = require('../models/CreateEvent');

const getAll = (req, res) => {
    CreateEvent.find()
        .exec()
        .then(event => res.json(event))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    CreateEvent.create(req.body)
        .then(createdEvent => res.json(createdEvent))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    CreateEvent.findOneAndUpdate ({ id: req.params.id}, req.body)
        .exec()
        .then(createEvent => res.json(createEvent))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    CreateEvent.deleteOne ({ id: req.params.id})
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


