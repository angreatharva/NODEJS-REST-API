const StudentModel = require('./studentModel.js');


class StudentServices{
    static async registerStudent(data){
        try{
            const studentData = await new StudentModel(data);
            return studentData.save();
        }
        catch(e){
            throw e;
        }
    }

    static async getAllStudents(){
        try{
            return await StudentModel.find();
        }
        catch(e){
            throw e;
        }
    }
    static async getStudentsById(id){
        try{
            return await StudentModel.findOne({studentId:id});
        }
        catch(e){
            throw e;
        }
    }
    static async patchStudent(id,data){
        try{
            return await StudentModel.findOneAndUpdate(
                {studentId:id},
                {$set:data},
                {new:true}
            );
        }
        catch(e){
            throw e;
        }
    }
    static async putStudent(id,data){
        try{
            return await StudentModel.findOneAndUpdate(
                {studentId:id},
                data,
                {new:true}
            );
        }
        catch(e){
            throw e;
        }
    }
    static async deleteStudent(id){
        try{
            return await StudentModel.findOneAndDelete({studentId:id});
        }
        catch(e){
            throw e;
        }
    }
}

module.exports = StudentServices;