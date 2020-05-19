const Senate = require('../models/Senate');

const getAll = (req, res) => {
    Senate.find()
        .exec()
        .then(rulebook => res.json(rulebook))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    Senate.create(req.body)
        .then(createdSenate => res.json(createdSenate))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    Senate.findOneAndUpdate ({ id: req.params.id}, req.body)
        .exec()
        .then(senate => res.json(senate))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Senate.deleteOne ({ id: req.params.id})
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


