
import React,{useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';

export default function DestinationCard({destination,baseUrl}) {
  const {user,setUser}=useContext(UserContext)
  
  
  
  const handleDelete=(e)=>{
    e.preventDefault()
    axios.delete(`${baseUrl}/destinations/${destination.id}`)
    .then(() => alert('Delete successful'));
  }


  

  return (
    <div className='destination-card'>
        <img className='destination-img' src={destination.imageUrl} alt="destination"/>
        <div className='destination-info'>
            <h1>{destination.title}</h1>
            <p>{destination.description}</p>
        
        </div> 
        <div>
          <Link to={`/destination-details/${destination}`}><button style={{marginBottom:"5px"}}>See details</button></Link>
          {
            user.id===destination.user_id ? <button style={{marginLeft:"5px"}} onClick={handleDelete}>Delete</button> :null
          }
        </div>
        
    </div>
  )
}
 