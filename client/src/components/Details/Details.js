import React from 'react'
import './../Details/details.css'

const Details = ({destination}) => {
  return (
    <div className='details__body'>
        <div className='details__container'>
         <div className='details__top'>
            <div className="details__profileimg"><img src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg'></img></div>
            <div className="details__cityimg"><img src={destination.imageUrl}></img></div>
            <h2 className='details__h2'>15</h2>
         </div>
         <div className='details__mid'>
            <h1>{destination.title}</h1>
            <p>{destination.description}</p>
         </div>
         <div className='details__bot'>
            <h2>username123515</h2>
            <h2>created: 07.07.2022</h2>
         </div>
    </div>
    </div>
    
  )
}

export default Details