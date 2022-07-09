
import React from 'react'
import { Link } from 'react-router-dom'

export default function DestinationCard({destination}) {
  



  return (
    <div className='destination-card'>
        <img className='destination-img' src={destination.imageUrl} alt="destination"/>
        <div className='destination-info'>
            <h1>{destination.title}</h1>
            <p>{destination.description}</p>
        
        </div> 
        <div>
          <Link to='/destination-details'><button>See details</button></Link>
        </div>
        
    </div>
  )
}
 