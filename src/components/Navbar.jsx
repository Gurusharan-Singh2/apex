import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
 const navigate= useNavigate();
 let [showMenu,setShowMenu]=useState(false);
 let [token,setToken]=useState(true);

 
  return (
    <div className=' flex justify-between items-center text-sm py-1 mb-5 h-32 border-b border-b-gray-400'>
      <img  onClick={()=>navigate('/signup')} className=' w-44 h-22 cursor-pointer' src={assets.logo} alt="" />

      <ul className=' md:flex items-start gap-5 font-medium'>
        <NavLink to={'/'} end>
          <li className=' py-1'>HOME</li>
        </NavLink>
        <NavLink to={'/doctors'}>
          <li className=' py-1'>ALL DOCTORS</li>
        </NavLink>
        <NavLink to={'/about'}>
          <li className=' py-1'>ABOUT</li>
        </NavLink>
        <NavLink to={'/contact'}>
          <li className=' py-1'>CONTACT</li>
        </NavLink>
      </ul>
      <div className=' flex items-center gap-4'>
        {
          token?
          <div className=' flex items-center gap-2 cursor-auto group  relative'>
            <img src={assets.profile_pic} className=' w-8 rounded-full' alt="" />
            <img src={assets.dropdown_icon} className='w-2.5' alt="" />
            <div className=' absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20  hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4' >
                <p className='hover:text-black cursor-pointer' onClick={()=>navigate('/my-profile')}>My Profile</p>
                <p className='hover:text-black cursor-pointer' onClick={()=>navigate('/my-appointments')}>My Appointments</p>
                <p className='hover:text-black cursor-pointer' onClick={()=>setToken(false)}>Logout</p>
              </div>
            </div>
            
          </div>
          :<button className=' bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block' onClick={()=>navigate('/login')}>CREATE ACCOUNT</button>
        }
        
      </div>
    </div>
  )
}

export default Navbar