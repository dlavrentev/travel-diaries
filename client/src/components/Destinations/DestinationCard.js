
import React from 'react'
import { Link } from 'react-router-dom'

export default function DestinationCard({destination}) {
  
  const handleDelete=()=>{
 
  }

  return (
    <div className='destination-card'>
        <img className='destination-img' src={destination.imageUrl} alt="destination"/>
        <div className='destination-info'>
            <h1>{destination.title}</h1>
            <p>{destination.description}</p>
        
        </div> 
        <div>
          <Link to={`/destination-details/${destination}`}><button>See details</button></Link>
          {
            userId===destination.user_id ? <button onClick={handleDelete}>delete</button> :null
          }
        </div>
        
    </div>
  )
}
 