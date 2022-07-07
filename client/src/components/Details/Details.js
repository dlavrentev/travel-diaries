import React from 'react'
import './../Details/details.css'

const Details = () => {
  return (
    <div className='details__body'>
        <div className='details__container'>
         <div className='details__top'>
            <div className="details__profileimg"><img src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg'></img></div>
            <div className="details__cityimg"><img src='https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'></img></div>
            <h2 className='details__h2'>15</h2>
         </div>
         <div className='details__mid'>
            <h1>Paris</h1>
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
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