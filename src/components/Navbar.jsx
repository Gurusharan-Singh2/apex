import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
 const navigate= useNavigate();
 
 let [token,setToken]=useState(true);
 let [toggle,setToggle]=useState(true);
 let [ptoggle,setpToggle]=useState(true);
 const toggleHandle = () => {
  setToggle((prev) => !prev);
};
const ptoggleHandle=(e)=>{
  if(e==false){
    setpToggle(true);

  }else{
    setpToggle(false);
  }
}
 
  return <>
 
    <div className=' flex justify-between items-center text-sm py-1 mb-5 h-32 border-b border-b-gray-400'>
      <img  onClick={()=>navigate('/signup')} className=' w-44 h-22 cursor-pointer' src={assets.logo} alt="" />

      <ul className=' hidden md:flex  items-start gap-5 font-medium'>
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
      <div className=' -mr-[25px] flex items-center gap-4'>
        {
          token?
          <div className=' -mr-28 md:mr-0 lg:mr-0  md:block flex items-center gap-2 cursor-auto   relative ' onClick={()=>ptoggleHandle(ptoggle)}>
            <img src={assets.profile_pic} className=' w-8 rounded-full' alt="" />
            <img src={assets.dropdown_icon} className='w-2.5' alt="" />
            <div className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20  ${ptoggle?  "hidden": "block"} `}>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4' >
                <p className='hover:text-black cursor-pointer' onClick={()=>navigate('/my-profile')}>My Profile</p>
                <p className='hover:text-black cursor-pointer' onClick={()=>navigate('/my-appointments')}>My Appointments</p>
                <p className='hover:text-black cursor-pointer' onClick={()=>(setToken(false) , navigate('/'))}>Logout</p>
              </div>
             
            </div>
            
          </div>
          :<button className=' bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block' onClick={()=>navigate('/signup')}>CREATE ACCOUNT</button>
        }
        
      </div>
      
      
    
    <div className='sm:hidden '>
    {toggle ? < CiMenuBurger className='text-4xl' onClick={toggleHandle} />:
     <div className="fixed top-0 left-0 w-screen h-screen bg-white  z-10">
     <RxCross1
       className="text-2xl absolute top-4 right-4 cursor-pointer"
       onClick={toggleHandle}
     />
     <ul className="flex flex-col items-start gap-5 mt-16 p-4">
       <NavLink to="/" end >
         <li className="py-1" onClick={toggleHandle}>
           HOME
         </li>
       </NavLink>
       <NavLink to="/doctors">
         <li className="py-1" onClick={toggleHandle}>
           ALL DOCTORS
         </li>
       </NavLink>
       <NavLink to="/about">
         <li className="py-1" onClick={toggleHandle}>
           ABOUT
         </li>
       </NavLink>
       <NavLink to="/contact">
         <li className="py-1" onClick={toggleHandle}>
           CONTACT
         </li>
       </NavLink>
     </ul>
   </div>
   

    
}
  </div>
  </div>
  </>
}

export default Navbar