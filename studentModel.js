const mongoose = require('./db.js');

const {Schema} = mongoose;

const StudentSchema = new Schema({
    studentId:{
        type:Number,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
});

const StudentModel = mongoose.model(
    'StudentModel',
    StudentSchema,
    'StudentData'
);

module.exports = StudentModel;