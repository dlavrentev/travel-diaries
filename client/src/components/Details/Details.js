import React from 'react'
import './../Details/details.css'
import DetailsCard from './DetailsCard'

const [destinationid,setDestinationId]=useState([])

const Details = ({destinations}) => {
  return (
    <div className='details__body'>
        <DetailsCard destinations={destinations}/>
    </div>
    
  )
}

export default Details