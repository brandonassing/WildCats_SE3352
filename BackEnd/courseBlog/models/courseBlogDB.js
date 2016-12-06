var mongoose = require('mongoose');
var postsSchema = mongoose.Schema(
    {
        studentNo: String,
        firstName: String,
        lastName: String,
        gender: String,
        birthDate: String,
        residency: String,
    }
);

var Posts = mongoose.model('post', postsSchema);

mongoose.connect('mongodb://localhost/courseBlog');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    exports.Posts = Posts;
});



