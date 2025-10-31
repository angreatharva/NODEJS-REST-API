const express = require('express');
const bodyParser = require('body-parser');
const StudentController = require('./studentController.js');

const app = express();

const port = 5000;

app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({limit:'100mb',extended:true}));

app.post('/register',StudentController.registerStudent);
app.get('/students',StudentController.getAllStudents);
app.get('/student/:id',StudentController.getStudentsById);
app.patch('/student/:id',StudentController.patchStudent);
app.put('/student/:id',StudentController.putStudent);
app.delete('/student/:id',StudentController.deleteStudent);


app.listen(port,()=>{
    console.log(`Connected on http://localhost:${port}`);
})

module.exports = app;