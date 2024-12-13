import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Banner = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
    gsap.from(".pp ",{
      x:-1200,
      duration:1,
     
    
      scrollTrigger:{
        trigger:".bannerr ",
        scroller:"body",
       
        start:"top 80%",
        scrub:2,
        end: "top 30%"
      }

    })
  })
    

  const navigate=useNavigate();

  return (
    <div className='pp'>

    
    <div className=' bannerr  bg-primary rounded-lg px-6 sm:px10 md:px-14 lg:px-12 my-20 md:mx-10 '>
      {/* leftside */}
      <div className='  flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
          <p>Book Appointment</p>
          <p className='mt-4'>With 100+ Trusted Doctors</p>
        </div>
        <button onClick={()=>{navigate(`/signup`); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-500'>Create Account </button>

      </div>

      {/* rightside  */}
      <div className=' hidden md:block w-1/2 lg:w-[370px] relative '>
       <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Banner