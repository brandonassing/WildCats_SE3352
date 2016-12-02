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
        var record = new models.Records(request.body.record);
        record.save(function (error) {
            if (error) response.send(error);
            response.json({
                record: record
            });
        });


    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Records.find(function (error, records) {
            if (error) response.send(error);
            response.json({
                record: records
            });
        });
    });

router.route('/:record_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Records.findById(request.params.record_id, function (error, record) {
            if (error) {
                response.send({
                    error: error
                });
            } else {
                response.json({
                    record: record
                });
            }
        });
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Records.findById(request.params.record_id, function (error, record) {
            if (error) {
                response.send({
                    error: error
                });
            } else {
                record.studentNo = request.body.record.studentNo;
                record.firstName = request.body.record.firstName;
                record.lastName = request.body.record.lastName;
                record.birthDate = request.body.record.birthDate;
                record.residency = request.body.record.residency;
                record.gender = request.body.record.gender;
                record.save(function (error) {
                    if (error) {
                        response.send({
                            error: error
                        });
                    } else {
                        response.json({
                            record: record
                        });
                    }
                });
            }
        });
    });


module.exports = router;