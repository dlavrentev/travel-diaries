const express = require('express');
const app = express()
const PORT = 4000;
app.use(express.json());
const shortid = require('shortid');




app.get('/',(req, res)=>{
    res.json({message:"Hi World"})
})

app.get('/welcome',(req, res)=>{
    res.json({message:"Welcome"})
})

let students = [];

app.get('/students',(req, res)=>{
    res.status(200).json(students)
})


app.post('/addstudent',(req, res)=>{
    const newStudent = req.body
    newStudent.id = shortid.generate()
    students.push(newStudent)
    res.status(200).json(newStudent)
})

app.listen(PORT,()=>{
    console.log(`My server is running at port ${PORT}`)
})