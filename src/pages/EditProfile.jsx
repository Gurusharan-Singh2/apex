import React, { useState } from 'react'
import { assets } from '../assets/assets';

const EditProfile = () => {
  const userData={
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
  };
  
  
  return (
    <div className='w-full flex flex-col'>
      <h1 className='text-2xl font-semibold text-gray-500 ml-10'>Edit Profile</h1>
      <form action="" method="post" className='m-10  max-w-[50%] flex flex-col gap-4' encType=' multipart/form-data'>
        <input type="text" name="name" id="" placeholder={userData.name} className='border border-gray-400 p-1 rounded-xl' />
        <input type="phone" name="phone" id="" placeholder={userData.phone} className='border border-gray-400 p-1 rounded-xl' />
        <input type="phone" name="add1" id="" placeholder={userData.address.line1} className='border border-gray-400 p-1 rounded-xl' />
        <input type="phone" name="add2" id="" placeholder={userData.address.line2} className='border border-gray-400 p-1 rounded-xl' />
        <select name="gender" id="" className='border border-gray-400 p-1 rounded-xl text-gray-500'>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
       <input type="date" name="dob" id="" value={userData.dob}  className='border text-gray-500 border-gray-400 p-1 rounded-xl' />
       <input type="file" name="photo" id="" />
       <button type='submit' className=' w-24 px-5 py-3 rounded-full border border-gray-500 text-base hover:bg-primary hover:scale-105 transition-all duration-300' >Save</button>
      </form>
    </div>
  )
}

export default EditProfile