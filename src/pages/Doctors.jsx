import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const {speciality}=useParams();
  const  {doctors}=useContext(AppContext);
  const [FilteDoctors,Setfilterdoctors]=useState([]);
  const navigate=useNavigate();
const applyfilter=()=>{
  if(speciality){
    Setfilterdoctors(doctors.filter((doc)=>doc.speciality===speciality));
  }
  else{
    Setfilterdoctors(doctors);
  }
}

useEffect(()=>{
  applyfilter();

},[speciality,doctors])
  


  
  
  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col  items-start gap-5 mt-5'>
        <div className="flex flex-col gap-4 text-sm text-gray-600">
  
  <select
    id="doctorSelect"
    className="w-full bg-white h-10 sm:w-auto pl-3 pr-12 border border-gray-300 rounded transition-none cursor-pointer"
    onChange={(e) => navigate(`/doctors/${e.target.value}`)}
  >
    <option value="General Physician">General Physician</option>
    <option value="Gynecologist">Gynecologist</option>
    <option value="Dermatologist">Dermatologist</option>
    <option value="Pediatrician">Pediatrician</option>
    <option value="Neurologist">Neurologist</option>
    <option value="Gastroenterologist">Gastroenterologist</option>
  </select>
</div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {FilteDoctors.map((item,index)=>(
          <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
            <img className='bg-blue-50 bg-contain ' src={item.image} alt="" />
            <div className='  p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className=' size-2 bg-green-500 rounded-full'></p><p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors