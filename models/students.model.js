var mongoose = require('mongoose');
var studentschema ={
    'name':String,
    'batch':String,
    'village':String,
    'email':String,
    'password':String
    };
var Schema = mongoose.Schema;
var student_schema = new Schema(studentschema);
module.exports = mongoose.model('studentdatas',student_schema);
