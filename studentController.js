const StudentServices = require('./studentServices.js');

exports.registerStudent = async(req,res) =>{
    try{
        const successData = await StudentServices.registerStudent(req.body);
        res.status(201).json({
            status:true,
            data:successData
        });

    }
    catch(e){
        console.log('registeration failed! '+e);
    }
}

exports.getAllStudents = async(req,res) =>{
    try{
        const successData = await StudentServices.getAllStudents();
        res.status(200).json({
            data:successData
        });

    }
    catch(e){
        console.log('Get Student failed! '+e);
    }
}

exports.getStudentsById = async(req,res) =>{
    try{
        const studentId = Number(req.params.id);
        const successData = await StudentServices.getStudentsById(studentId);
        res.status(200).json({
            data:successData
        });

    }
    catch(e){
        console.log('Get Student failed! '+e);
    }
}
exports.patchStudent = async(req,res) =>{
    try{
        const studentId = Number(req.params.id);
        const successData = await StudentServices.patchStudent(studentId,req.body);
        res.status(201).json({
            data:successData
        });

    }
    catch(e){
        console.log('Get Student failed! '+e);
    }
}


exports.putStudent = async(req,res) =>{
    try{
        const studentId = Number(req.params.id);
        const successData = await StudentServices.putStudent(studentId,req.body);
        res.status(201).json({
            data:successData
        });

    }
    catch(e){
        console.log('Get Student failed! '+e);
    }
}

exports.deleteStudent = async(req,res) =>{
    try{
        const studentId = Number(req.params.id);
        const successData = await StudentServices.deleteStudent(studentId);
        res.status(201).json({
            data:successData
        });

    }
    catch(e){
        console.log('Get Student failed! '+e);
    }
}