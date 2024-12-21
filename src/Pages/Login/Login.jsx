import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login,signup} from '../../firebase.js'
import { useState } from 'react'
import { useNavigate } from 'react-router'
function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  const [signState, setSignState] = useState("Sign Up")

  const navigate = useNavigate();
const user_auth = async(e) => {
  e.preventDefault();
  if(signState==="Sign Up"){
    await signup(name,email,password);
  }
  else{
    await login(email,password);
  }
}


  const handleSwitch = () => {
    if(signState==="Sign Up"){
      setSignState("Sign In")
    }else{
      setSignState("Sign Up")
  }}
  return (
    <div className='login'>
      <div className="login-logo">
        <img src={logo} alt="" />
      </div>
      <form >
      <h1>{signState==="Sign Up"?"Sign Up" :"Sign In"}</h1>
        {signState==="Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}} className='field' type="text" placeholder="Name"/>:<></>}
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='field' type="email" placeholder="Email" />
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='field' type="password" placeholder="Password" />
        <button id='btn' onClick={user_auth} type="submit">{signState}</button>
        <div className="formhelp">
          <div className="remember">
          <input type="checkbox" />
          <label>Remember me</label>
          </div>
          <p>Need Help?</p>
        </div>
      <div onClick={handleSwitch} className="switch">{signState==="Sign Up"?<p>Already have Account?   <span>Sign In</span></p>:<p>New To Netflix?  <span>Sign Up</span></p>}</div>  
         </form>
    </div>
  )
}

export default Login