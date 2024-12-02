import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p >CONTACT <span className='text-gray-700'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row  gap-10 mb-28 '>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6 '>
          <p className=' font-semibold text-lg text-gray-600 '>Our OFFICE</p>
          <p className='text-gray-500'>Bhaisamau, Bakshi Ka Talab,Lucknow ,India</p>
          <p className='text-gray-500'>Tel :(451) 4464-659-22</p>
          <p className=' font-semibold text-lg text-gray-600 '>Careers at APEX</p>
          <p className='text-gray-500'>Learn more about our Services</p>
          
        </div>
      </div>
    </div>
  )
}

export default Contact