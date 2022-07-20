import React,{useState,useContext} from 'react'
import axios from 'axios';
import './form.css'
import { UserContext } from '../../context/UserContext';

export default function Form({baseUrl}) {

const [title,setTitle]=useState('')
const [submit,setSubmit]=useState('');
const [description,setDescription]=useState('')
const [imageUrl,setImageUrl]=useState('')
const {user,setUser}=useContext(UserContext)

const submitButton= () => {
    if (submit === true) {
     setSubmit(false)
    } else {
     setSubmit(true)
    }
}

const addNewDestination=(e)=>{ 
    e.preventDefault();
    axios.post(`${baseUrl}/users/${user.id}/destinations`,{
         title,description,imageUrl
    })
    .then(res=>{
         console.log(res.data)
    })
    .catch(err=>console.log(err))
}


  return (
    <div className='add-form-container'>
       <form className="add-destination-form"onSubmit={addNewDestination}>
           <h1>Add new destination</h1>
           <div className='input-container'>
                <label>Destination</label>
                <input value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Enter destination' maxlength="20"/>
           </div>
           <div className='input-container'>
                <label>Description</label>
                <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder='Enter description' maxlength="80"></textarea>
           </div>
           <div className='input-container'>
                <label>Add Image</label>
                <input value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}} placeholder='Enter image url'/>
           </div>
           <button type="submit" onClick={submitButton}>Submit</button>
           


           {
              submit ? <p style={{"color":"green"}}>Can you add another one?</p> : <p style={{"color":"green"}}>Come on! One more!</p> 
           }
           
          
           
       </form>
       
    </div>
  )
}
