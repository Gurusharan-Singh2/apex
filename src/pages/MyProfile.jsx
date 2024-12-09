import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const MyProfile = () => {
  const [userData,setUserdata]=useState({
    name:"Maria",
    image:assets.profile_pic,
    email:"Maria415@gmail.com",
    phone:"+91 9621004747",
    address:{
      line1:"Bkt Bhaisamau",
      line2:"Lucknow, Uttar-Pradesh,India",
    },
    gender:"Male",
    dob:"2000-11-25"
  });
  const navigate=useNavigate()
  
  const [Edit,setEdit]=useState(false);

  
  return (
    <div className='max-w-full flex flex-col gap-4'>
      <img className='w-32 rounded' src={userData.image} alt="" />
      <p className='text-3xl sm:text-4xl'>{userData.name}</p>
      <hr />
      <div className='flex flex-col gap-5'>
      <p className='text-gray-400 underline'>CONTACT INFORMATION</p>
      <div className='w-full sm:w-[400px] flex justify-between'>
      <p className='text-gray-500 text-base'>Email Id:</p>
      <p className='text-blue-500 mr-5 text-base'>{userData.email}</p>
      </div>
      <div div className='w-full sm:w-[400px] flex justify-between'>
      <p className='text-gray-500 text-base'>Phone No:</p>
      <p className='text-blue-500 mr-5 text-base'>{userData.phone}</p>
      </div>
      <div className='w-full sm:w-[400px] flex justify-between' >
      <p  className='text-gray-500 text-base'>Address:</p>
      <div>
      <p className='text-gray-700 mr-5 text-base'>{userData.address.line1}</p>
      <p className='text-gray-700 mr-5 text-base'>{userData.address.line2}</p>
      </div>
      
      </div>
  

      </div>
      <div className='flex flex-col gap-5'>
      <p className='text-gray-400 underline'>BASIC INFORMATION</p>
      <div className=' w-full sm:w-[400px] flex justify-between '>
      <p className='text-gray-500 text-base'>Gender:</p>
      <p className='text-gray-700 mr-5 text-base'>{userData.gender}</p>
      </div>
     <div className='w-full sm:w-[400px] flex justify-between'>
     <p className='text-gray-500  text-base'>Birthday:</p>
      <p className='text-gray-700 mr-5 text-base'>{userData.dob}</p>
      
     </div>
     
      </div>
      

      <div className='flex gap-8'>
        <button className=' px-5 py-3 rounded-full border border-gray-500 text-base hover:bg-primary hover:scale-105 transition-all duration-500' onClick={()=>navigate('/edit')}>Edit</button>
        
      </div>

      
    
       
    </div>
  )
}

export default MyProfile