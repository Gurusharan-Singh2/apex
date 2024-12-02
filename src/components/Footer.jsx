import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        {/* lsec */}
        <div>
          <img className='mb-5 size-24 ' src={assets.logo} alt="" />
          <p className=' w-full md:w-2/3 text-gray-600 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga praesentium enim culpa nisi animi, modi mollitia sed accusamus a amet, libero quos </p>
        </div>
        {/* center section */}
        <div >
          <p className='text-xl font-medium mb-5'>Company</p>

          <ul className='flex flex-col gap-2 text-gray-600 '>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right scetion */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600 '>
            <li>+919524467812</li>
            <li>Example123@gmail.com</li>
          </ul>

        </div>
      </div>
{/* copyright */}
      <div>
<hr />
<p className=' py-5 text-sm text-center'>Copyright 2024@ Apex. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer