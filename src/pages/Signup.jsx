import React, { useRef, useState } from 'react';


const Signup = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  
  const [FormData , SetformData]=useState();
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    const formData = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    SetformData(formData);
    email.current.value=" ";
    name.current.value=" ";
    password.current.value=" ";
  };

  
  

  return (
    <div className='w-full flex justify-center mb-[-20px]'>

    
    <div className='w-full md:max-w-[400px] border border-gray-100 shadow-md flex flex-col p-5'>
      <p className='text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-gray-900 font-medium  py-4'>Create Account</p>
      <p className='text-gray-500  text-base py-3'>Please signup to book Appointment</p>
      <form method="post" onSubmit={handleSubmit}>
        <p className='text-gray-500  text-base py-3'>Full Name</p>
        <input className='w-full border border-gray-300 p-1 rounded-lg mb-2 ' type="text" name="name" ref={name} required />
        
        <p  className='text-gray-500  text-base py-3'>Email</p>
        <input  className='w-full border border-gray-300 p-1 rounded-lg mb-2 '  type="email" name="email" ref={email} required />
        
        <p  className='text-gray-500  text-base py-3'>Password</p>
        <input className='w-full border border-gray-300 p-1 rounded-lg mb-2 ' type="password" name="password" ref={password} required />
        
        <button className='px-5 py-2 rounded-full text-white my-2 bg-primary' type="submit">Signup</button>

        <p>Already User? <a className='px-3 px-3 py-1 bg-primary hover:bg-red-600 text-white rounded-2xl text-sm' href="/login">Login</a></p>
      </form>
    </div>
    </div>
  );
};

export default Signup;
