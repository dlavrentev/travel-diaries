import React from 'react'
import './../Details/details.css'

const DetailsCard = ({destination}) => {

  console.log(destination.user_id)
  return (
        <div className='details__container'>
         <div className='details__top'>
            <div className="details__profileimg"><img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'></img></div>
            <div className="details__cityimg"><img src={destination.imageUrl}></img></div>
            <h2 className='details__h2'>{destination.user_id}</h2>
         </div>
         <div className='details__mid'>
            <h1>{destination.title}</h1>
            <p>{destination.description}</p>
         </div>
         <div className='details__bot'>
            <h2>username</h2>
            <h2>created</h2>
         </div>
    </div>
  )
}

export default DetailsCard