import React,{ useEffect, useState} from 'react'
import './App.css';
import {
	BrowserRouter,
	Route, 
	Routes,
} from 'react-router-dom';
import axios from 'axios';
import Destinations from './components/Destinations/Destinations';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form.js/Form';
import DetailsCard from './components/Details/DetailsCard';
import { UserContext } from './context/UserContext'




function App() {



const baseUrl = 'https://travel-diaries-project.herokuapp.com'
const [destinations,setDestinations]=useState([]);
const [user,setUser]=useState({});


useEffect(() => {
  axios.get('https://travel-diaries-project.herokuapp.com/destinations')
   .then(res=>{
     setDestinations(res.data)
   })
   .catch(err=>console.log(err))
}, [])





  return (
      <UserContext.Provider value={{user,setUser}}>
      <BrowserRouter>
        <Header baseUrl={baseUrl} />
              <Routes>
                <Route path="/" element={<Destinations destinations={destinations} baseUrl={baseUrl}/>}/>
                <Route path="/add-destination" element={<Form baseUrl={baseUrl} />}/>
                <Route path="/destination-details/:cityid" element={<DetailsCard baseUrl={baseUrl}  />}/>
              </Routes>
        <Footer/>
        </BrowserRouter>
      </UserContext.Provider>
    
    
  );
}

export default App;
