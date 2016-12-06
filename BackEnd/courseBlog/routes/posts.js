var express = require('express');
var router = express.Router();
var models = require('../models/courseBlogDB');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({
    extended: false
});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var post = new models.Posts(request.body.post);
        post.save(function (error) {
            if (error) response.send(error);
            response.json({
                post: post
            });
        });


    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Posts.find(function (error, records) {
            if (error) response.send(error);
            response.json({
                post: posts
            });
        });
    });

//check router.js file in front end
router.route('/:post_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Posts.findById(request.params.post_id, function (error, post) {
            if (error) {
                response.send({
                    error: error
                });
            } else {
                response.json({
                    post: post
                });
            }
        });
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Posts.findById(request.params.post_id, function (error, post) {
            if (error) {
                response.send({
                    error: error
                });
            } else {
                post.studentNo = request.body.record.studentNo;
                post.firstName = request.body.record.firstName;
                post.lastName = request.body.record.lastName;
                post.birthDate = request.body.record.birthDate;
                post.residency = request.body.record.residency;
                post.gender = request.body.record.gender;
                post.save(function (error) {
                    if (error) {
                        response.send({
                            error: error
                        });
                    } else {
                        response.json({
                            post: post
                        });
                    }
                });
            }
        });
    });


module.exports = router;