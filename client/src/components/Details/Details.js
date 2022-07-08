import React from 'react'
import './../Details/details.css'
import DetailsCard from './DetailsCard'

const Details = ({destinations}) => {
  return (
    <div className='details__body'>
        <DetailsCard key={destinations.id} destination={destinations} />
    </div>
    
  )
}

export default Details