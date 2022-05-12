const { response } = require('express');
const express = require('express');
const app = express()
const PORT = 4000;
app.use(express.json());
const shortid = require('shortid');
const Travels = require('./dbHelpers')
const bodyParser = require('body-parser')
app.use(bodyParser.json())




app.get('/',(req, res)=>{
    res.status(200).json({message:"Hi World"})
})

app.get('/users',(req,res)=>{
    Travels.getAllUsers()
    .then(users=>{
        res.status(200).json(users)
    })
    .catch(error=>res.status(500).json(error))
})

app.post('/users/register',(req,res)=>{
    const credentials = req.body
    
    if(!(credentials.username && credentials.password)) {
        return res.status(400).json({message:"username and password required"})
    }




    Travels.addUser(credentials)
     .then(user=>{
         res.status(200).json(user)
     })
     .catch(error=>res.status(500).json(error))
})

app.get('/users/:username',(req,res)=>{
    const username = req.params.username
    
    Travels.findUserByUsername(username)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(error=>res.status(500).json(error))
})



app.listen(PORT,()=>{
    console.log(`My server is running at port ${PORT}`)
})


// app.get('/welcome',(req, res)=>{
//     res.json({message:"Welcome"})
// })

// let students = [];

// app.get('/students',(req, res)=>{
//     res.status(200).json(students)
// })


// app.post('/addstudent',(req, res)=>{
//     const newStudent = req.body
//     newStudent.id = shortid.generate()
//     students.push(newStudent)
//     res.status(200).json(newStudent)
// })