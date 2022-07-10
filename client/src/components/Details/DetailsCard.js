import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './../Details/details.css'
import { useParams } from 'react-router-dom'



const DetailsCard = ({destinations}) => {

const [user,setUser] = useState([]);  
   



const {cityid} = useParams();

const index = destinations.findIndex( (element) => element.id == cityid);
const userId = destinations[index].user_id;
const userIndex = destinations.findIndex( (element) => element.user_id == userId);

console.log(user[0]);


useEffect(() => {
   axios.get('http://localhost:4000/users')
    .then(res=>{
      setUser(res.data)
    })
    .catch(err=>console.log(err))
 }, [])
   



  return (
        <div className='details__container'>
         <div className='details__top'>
            <div className="details__profileimg"><img alt='profile'src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'></img></div>
            <div className="details__cityimg"><img alt='city' src={destinations[index].imageUrl}></img></div>
            <h2 className='details__h2'>{destinations[index].id}</h2>
         </div>
         <div className='details__mid'>
            <h1>{destinations[index].title}</h1>
            <p>{destinations[index].description}</p>
         </div>
         <div className='details__bot'>
            <h2>{userIndex}</h2>
            <h2>created</h2>
         </div>
    </div>
  )
}

export default DetailsCard