import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './../Details/details.css'
import { useParams } from 'react-router-dom'



const DetailsCard = ({destinations, usercontext}) => {

   
const [user,setUser] = useState([]);
const [currentDestination, setCurrentDestination] = useState([]);


const {cityid} = useParams();

// const index = destinations.findIndex( (element) => element.id == cityid);
// const userId = destinations[index].user_id;
// const userIndex = destinations.findIndex( (element) => element.user_id == userId);


useEffect(() => {
   axios.get(`http://localhost:4000/destinations/${cityid}`)
   .then (res=>{
      setUser(res.data);
   })
   .catch(err=>console.log(err))
 }, [])
 


   



  return (
        <div className='details__container'>
         <div className='details__top'>
            <div className="details__profileimg"><img alt='profile'src={usercontext[userIndex].imageUrl}></img></div>
            <div className="details__cityimg"><img alt='city' src={currentDestination.imageUrl}></img></div>
            <h2 className='details__h2'>{currentDestination.id}</h2>
         </div>
         <div className='details__mid'>
            <h1>{currentDestination.title}</h1>
            <p>{currentDestination.description}</p>
         </div>
         <div className='details__bot'>
            <h2>{usercontext[userIndex].username}</h2>
            <h2>{usercontext[userIndex].created_at}</h2>
         </div>
    </div>
  )
}

export default DetailsCard