const Campus_Student = require('../models/Campus_Srudent');

const getAll = (req, res) => {
    Campus_Student.find()
        .exec()
        .then(campus_student => res.json(campus_student))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    Campus_Student.create(req.body)
        .then(createdCampus_Student => res.json(createdCampus_Student))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    Campus_Student.findOneAndUpdate ({ id: req.params.id}, req.body)
        .exec()
        .then(campus_student => res.json(campus_student))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    Campus_Student.deleteOne ({ id: req.params.id})
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


