import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email,Setemail]=useState('')
  const [password,Setpassword]=useState('')
  const navigate=useNavigate();

  
  
  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent page refresh
    
    
  };
  return (
    <div className='w-full flex justify-center mb-[-20px]'>

    
    <div className='w-full md:max-w-[400px] border border-gray-100 shadow-md flex flex-col p-5'>
      <p className='text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-gray-900 font-medium  py-4'>Admin Login Page</p>
      <p className='text-gray-500  text-base py-3'>Please Login to book Appointment</p>
      <form method="post" onSubmit={handleSubmit}>
        <p className='text-gray-500  text-base py-3'>Email</p>
        <input className='w-full border border-gray-300 p-1 rounded-lg mb-2 ' type="email" name="email" onChange={(e)=>Setemail(e.target.value)} required />
         
        
        <p  className='text-gray-500  text-base py-3'>Password</p>
        <input className='w-full border border-gray-300 p-1 rounded-lg mb-2 ' type="password" name="password" onChange={(e)=>Setpassword(e.target.value)} required />
        
        <button className='px-5 py-2 rounded-full text-white my-2 bg-primary' type="submit">Login</button>

        <p>New Account ? < a className='px-3 px-3 py-1 bg-primary hover:bg-red-600 text-white rounded-2xl text-sm' onClick={()=>navigate('/signup')}>Signup</a></p>
      </form>
    </div>
    </div>
  )
}

export default Login