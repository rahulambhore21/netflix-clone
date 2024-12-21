import React, { useEffect } from 'react'
import Home from '../src/Pages/Home/Home.jsx'
import { Routes, Route, useNavigate } from "react-router";
import Login from '../src/Pages/Login/Login.jsx'
import Player from './Pages/Player/Player.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';
import { ToastContainer } from 'react-toastify';

function App() {

  const navigate  = useNavigate();


useEffect(()=>{
  onAuthStateChanged(auth,async(user)=>{
    if(!user){
      console.log('User not logged in');
      navigate('/login');
    }else{
      console.log('User logged in');
      navigate('/');
    }
  })
},[])
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  )
}

export default App