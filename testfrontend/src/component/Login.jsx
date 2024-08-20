import React from 'react'
import { useState } from 'react'
import axios from 'axios';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin=async(e)=>{
    e.preventDefault();
    const res=await axios.post(`http://localhost:8080/api/signin`,{username,password});
    console.log(res.data);
    const token=res.data.token;
    localStorage.setItem("token",token);
    if(res.data.status===200){
      alert("login sucessfull");
    }

  }
  return (
    <>
    <div>
      <form type="submit">
        <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
    </>
  )
}

export default Login
