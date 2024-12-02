import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex  flex-col md:flex-row gap-16'>
        <img className=' w-[80%] mx-auto md:max-w-[320px] md:rounded-lg rounded-full' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6   text-gray-600'>
          <p>Welcome to Apex, your reliable solution for hassle-free healthcare management. We recognize the difficulties in booking doctor appointments and handling health records. Committed to innovation, Apex leverages cutting-edge technology to enhance user experience and provide top-tier service. Whether scheduling a visit or managing long-term care, we’re here to assist you at every stage.</p>

          <b className='text-gray-800'>Our Vision</b>
          <p>At Apex, our vision is to simplify healthcare for all. We strive to connect patients with healthcare providers, ensuring you can access the care you need, exactly when you need it.</p>
        </div>
      </div>
    </div>
  )
}

export default About