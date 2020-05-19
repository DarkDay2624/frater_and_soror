const Colleague = require('../models/Colleague');

const getAll = (req, res) => {
    Colleague.find()
        .exec()
        .then(colleague => res.json(colleague))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    Colleague.create(req.body)
        .then(createdColleague => res.json(createdColleague))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    Colleague.findOneAndUpdate ({ id: req.params.id}, req.body)
        .exec()
        .then(colleague => res.json(colleague))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Colleague.deleteOne ({ id: req.params.id})
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


