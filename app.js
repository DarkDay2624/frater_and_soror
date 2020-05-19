const express = require('express');
const mongoose = require('mongoose');
const myconfig = require('./config/myconfig');
const bodyParser = require('body-parser');
const passport = require('passport');
const PORT = process.env.PORT || 5000;
const Students = require('./models/Students');
const Fraternity = require('./models/Fraternity');
const Users = require('./models/Users');
const Campus = require('./models/Campus');
const AttendanceEvent = require('./models/AttendanceEvent');
const CreateEvent = require('./models/CreateEvent');
const Rule = require('./models/Rule');
const Rulebook = require('./models/Rulebook');
const Senate = require('./models/Senate');
const Senate_Students = require('./models/Senate_Students');
const Violation = require('./models/Violation');

const app = express();
app.use(passport.initialize());
require('./middleware/passport')(passport);
app.use(require('cors')());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: false}));

async function start() {
    try {
        await mongoose.connect(myconfig.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => console.log('MongoDB Connected'))
            .catch(err => console.log(err));

        app.listen(5000, () => console.log('App has been started on port ' + myconfig.PORT))

    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1)
    }
}

app.use(bodyParser.json());

const attendanceEvent = require('./routes/attendanceEvent');
const auth = require('./routes/auth');
const campus = require('./routes/campus');
const createEvent = require('./routes/createEvent');
const fraternity = require('./routes/fraternity');
const rule = require('./routes/rule');
const rulebook = require('./routes/rulebook');
const senate = require('./routes/senate');
const senate_students = require('./routes/senate_students');
const student = require('./routes/student');
const violation = require('./routes/violation');

app.use('/AttendanceEvent', attendanceEvent);
app.use('/Auth', auth);
app.use('/Campus', campus);
app.use('/CreteEvent', createEvent);
app.use('/Rule', rule);
app.use('/Rulebook', rulebook);
app.use('/Senate', senate);
app.use('/Senate_Students', senate_students);
app.use('/Fraternity', fraternity);
app.use('/Students', student);
app.use('/Violation', violation);

start();
