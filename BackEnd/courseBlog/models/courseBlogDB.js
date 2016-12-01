var mongoose = require('mongoose');
var recordSchema = mongoose.Schema(
    {
        studentNo: string,
        firstName: string,
        lastName: string,
        birthDate: string,
        residency: string,
        gender: string
    }
);

var Records = mongoose.model('record', recordSchema);

mongoose.connect('mongodb://localhost/courseBlog');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    exports.Records = Records;
});



