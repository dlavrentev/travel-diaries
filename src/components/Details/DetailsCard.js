import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './../Details/details.css'
import { useParams } from 'react-router-dom'



const DetailsCard = ({baseUrl}) => {



   
const [user,setUser] = useState([]);
const [created,setCreated] =useState([]);
const [currentDestination, setCurrentDestination] = useState([]);


const {cityid} = useParams();


useEffect(() => {
   axios.get(`${baseUrl}/destinations/${cityid}`)
   .then (res=>{
      setCurrentDestination(res.data);
      axios.get(`${baseUrl}/users/userId/${res.data.user_id}`)
      .then (res=>{
         setUser(res.data);
         setCreated(res.data.created_at.substring(0,10))
      })
      .catch(err=>console.log(err))
   })
   .catch(err=>console.log(err))
 }, [])
 


   



  return (
   <div className='details__body'>
   <div className='details__container'>
   <div className='details__top'>
      <div className="details__profileimg"><img alt='profile'src={user.imageUrl}></img></div>
      <div className="details__cityimg"><img alt='city' src={currentDestination.imageUrl}></img></div>
      <h2 className='details__h2'>{currentDestination.id}</h2>
   </div>
   <div className='details__mid'>
      <h1>{currentDestination.title}</h1>
      <p>{currentDestination.description}</p>
   </div>
   <div className='details__bot'>
      <h2>{user.username}</h2>
      <h2>{created}</h2>
   </div>
</div>
</div>
        
  )
}

export default DetailsCard