import React from 'react'
import './../Details/details.css'
import DetailsCard from './DetailsCard'




const Details = ({destinations, usercontext}) => {

 

  return (
    <div className='details__body'>
        <DetailsCard destinations={destinations} usercontext={usercontext}/>
    </div>
    
  )
}

export default Details