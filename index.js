const { response } = require('express');
const express = require('express');
const app = express()
const PORT = 4000;
app.use(express.json());
const shortid = require('shortid');
const Travels = require('./dbHelpers')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const bcrypt = require('bcryptjs')


// Welcome 

app.get('/',(req, res)=>{
    res.status(200).json({message:"Hi World"})
})

// get all users

app.get('/users',(req,res)=>{
    Travels.getAllUsers()
    .then(users=>{
        res.status(200).json(users)
    })
    .catch(error=>res.status(500).json(error))
})


// create a new user 

app.post('/users/register',(req,res)=>{
    const credentials = req.body
    
    if(!(credentials.username && credentials.password)) {
        return res.status(400).json({message:"username and password required"})
    }


   const hash = bcrypt.hashSync(credentials.password,12)
   credentials.password = hash;




    Travels.addUser(credentials)
     .then(user=>{
         res.status(200).json(user)
     })
     .catch(error=>res.status(500).json(error))
})

// Get a user by username

app.get('/users/:username',(req,res)=>{
    
    // const username = req.params.username
    const {username} = req.params

    Travels.findUserByUsername(username)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(error=>res.status(500).json(error))
})

// Delete a user 

app.delete('/users/:id',(req, res)=>{
    
    // const id = req.params.id
    const {id} = req.params
    
    Travels.removeUser(id)
    .then(count=>{
        if(count>0){
            res.status(200).json({message:"User is deleted"})
        }else{
            res.status(404).json({message:"No user with that id"})
        }
    })
    .catch(error=>res.status(500).json(error))
})



// Login with existing user 

app.post('/users/login', (req,res)=>{
    
    // const username = req.body.username
    // const password = req.body.password
    const {username,password} = req.body


    
    Travels.findUserByUsername(username, password)
    .then(user=>{
        if(user && bcrypt.compareSync(password,user.password)){
            res.status(200).json(user)
        } else {
            res.status(404).json({message:"User with that password does not exist."})
        }
    })
})

// DESTINATIONS

app.get('/destinations',(req,res)=>{
    Travels.getAllDestinations()
    .then(destinations=>{
        res.status(200).json(destinations)
    })
    .catch(error=>res.status(500).json(error))
})


app.post('/users/:id/destinations',(req,res)=>{
    const {id}= req.params;
    const newDestination = req.body
    newDestination["user_id"] = id;

    Travels.findUserById(id)
    .then(user=>{
        if(!user){
            res.status(404).json({message:"User does not exist."})
        } else {
            if(!newDestination.title || !newDestination.description){
                res.status(400).json({message:"All fields must be complete"})
            } else {
                Travels.addDestination(newDestination)
                .then(destination=>{
                    res.status(200).json(destination)
                })
                .catch(error=>res.status(500).json(error))
            }
        }
    })
    .catch(error=>res.status(500).json(error))

})


app.delete('/destinations/:id',(req, res)=>{
    
    // const id = req.params.id
    const {id} = req.params
    
    Travels.removeDestination(id)
    .then(count=>{
        if(count>0){
            res.status(200).json({message:"Destination is deleted"})
        }else{
            res.status(404).json({message:"No destination with that id"})
        }
    })
    .catch(error=>res.status(500).json(error))
})


app.patch('destinations/:id',(req,res)=>{
    const {id} = req.params;
    Travels.updateDestination(id,req.body)
    .then(destination=>{
        res.status(200).json({message:"Destination updated"})
    })
    .catch()
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