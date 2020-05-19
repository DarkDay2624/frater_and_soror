const AttendanceEvent = require('../models/AttendanceEvent');

const getAll = (req, res) => {
    AttendanceEvent.find()
        .exec()
        .then(attendanceEvent => res.json(attendanceEvent))
        .catch(err => res.status(500).json(err))
};

const create = (req, res) => {
    AttendanceEvent.create(req.body)
        .then(createdAttendanceEvent => res.json(createdAttendanceEvent))
        .catch(err => res.status(500).json(err))
};

const update = (req, res) => {
    AttendanceEvent.findOneAndUpdate ({ id: req.params.id}, req.body)
        .exec()
        .then(attendanceEvent => res.json(attendanceEvent))
        .catch(err => res.status(500).json(err))
};

const remove = (req, res) => {
    AttendanceEvent.deleteOne ({ id: req.params.id})
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


