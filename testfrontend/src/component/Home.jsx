import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/login')}>Login</button>
     
      <button onClick={() => navigate('/signup')}>SignUp</button>
      <button onClick={() => navigate('/get')}>get</button>
      
      Home
    </div>
  )
}

export default Home
