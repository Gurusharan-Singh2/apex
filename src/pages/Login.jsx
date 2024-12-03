import React, { useRef, useState } from 'react'

const Login = () => {
  const name = useRef(null);
  
  const password = useRef(null);
  const navigate=useNavigate();
  
  const [FormData , SetformData]=useState();
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    const formData = {
      name: name.current.value,
      
      password: password.current.value,
    };
    SetformData(formData);
    
    name.current.value=" ";
    password.current.value=" ";
  };
  return (
    <div className='w-full flex justify-center mb-[-20px]'>

    
    <div className='w-full md:max-w-[400px] border border-gray-100 shadow-md flex flex-col p-5'>
      <p className='text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-gray-900 font-medium  py-4'>Login Back Into Account</p>
      <p className='text-gray-500  text-base py-3'>Please Login to book Appointment</p>
      <form method="post" onSubmit={handleSubmit}>
        <p className='text-gray-500  text-base py-3'>Full Name</p>
        <input className='w-full border border-gray-300 p-1 rounded-lg mb-2 ' type="text" name="name" ref={name} required />
         
        
        <p  className='text-gray-500  text-base py-3'>Password</p>
        <input className='w-full border border-gray-300 p-1 rounded-lg mb-2 ' type="password" name="password" ref={password} required />
        
        <button className='px-5 py-2 rounded-full text-white my-2 bg-primary' type="submit">Signup</button>

        <p>New Account ? < a className='px-3 px-3 py-1 bg-primary hover:bg-red-600 text-white rounded-2xl text-sm' onClick={()=>navigate('/signup')}>Login</a></p>
      </form>
    </div>
    </div>
  )
}

export default Login