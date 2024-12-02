import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [Doctor, Setdoctor] = useState(docId);
  const fetchDoc = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    Setdoctor(docInfo);
  };

  const [docSlots, Setdocslots] = useState([]);
  const [slotsIndex, SetslotsIndex] = useState(0);
  const [slotTime, SetslotTime] = useState("");
  const daysName=["SUN","MON","TUE","WED","THUR","FRI","SAT"];
  





  const availableSlots = async () => {
    Setdocslots([]); // Reset the slots

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i); 

      let startTime = new Date(currentDate.setHours(10, 0, 0, 0)); // Set to 10:00 AM
      let endTime = new Date(currentDate.setHours(21, 0, 0, 0)); // Set to 9:00 PM

      
      if (i === 0) {
        let now = new Date();
        startTime = new Date(Math.max(startTime, now));

        let minutes = startTime.getMinutes();
        if (minutes > 0 && minutes <= 30) {
          startTime.setMinutes(30);
        } else if (minutes > 30) {
          startTime.setMinutes(0);
          
        }
      }

      let timeSlots = [];
      while (startTime < endTime) {
        timeSlots.push({
          dateTime: new Date(startTime),
          time: startTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            
          }),
        });
        let minutes = startTime.getMinutes();
        startTime.setMinutes(minutes+30); 
      }

      Setdocslots((prev) => [...prev, timeSlots]); // Add slots for the day
    }
  };

  useEffect(() => {
    availableSlots();
  }, [Doctor]);

  useEffect(() => {
    fetchDoc();
  }, [doctors, docId]);



  return (
    Doctor && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full rounded-3xl sm:max-w-72 sm:rounded-full  "
              src={Doctor.image}
              alt=""
            />
          </div>
          <div className=" flex-1 border   border-gray-400 rounded-lg  p-8 py-7 bg-white mx-2 sm:mx-0  sm:mt-0 ">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {Doctor.name}{" "}
              <img className=" w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm  mt-1 to-gray-600">
              <p>
                {Doctor.degree} - {Doctor.speciality}
              </p>
              <button className="py-0.5 px-2 border border-gray-500 cursor-default text-xs rounded-full">
                {Doctor.experience}
              </button>
            </div>

            <div>
              <p className="flex items-center gap-1 text-[16px] font-medium  text-gray-900 mt-3">
                About{" "}
                <img className=" w-4 ml-4" src={assets.info_icon} alt="" />
              </p>
              <p className=" text-base text-gray-700 max-w-[700px] mt-1">
                {Doctor.about}
              </p>
            </div>
            <p className=" text-gray-500 font-medium mt-4 ">
              Appointment Fee:{" "}
              <span className="text-gray-600 ">
                {currencySymbol}
                {Doctor.fees}
              </span>
            </p>
          </div>
        </div>

   {/* bs */}
   <div className="sm:ml-72 sm:pl-4 mt-4  font-medium text-gray-700">
    <p>Booking Slots</p>
    <div className="flex gap-3 items-center w-full  overflow-x-scroll mt-4">
    {
        docSlots.length && docSlots.map((item,index)=>(
          <div onClick={()=>SetslotsIndex(index)} className={`text-center py-10 sm:py-20 min-w-28 rounded-lg cursor-pointer ${slotsIndex===index ? 'bg-purple-600 text-white' : 'border border-gray-300'}`} key={index}>
            
            <p>{item[0] && daysName[item[0].dateTime.getDay()]}</p>
            <p>{item[0] && item[0].dateTime.getDay()}</p>
          </div>
        ))
      }
    </div>
    <div  className="flex items-center gap-3 w-full overflow-x-scroll mt-5">
      {docSlots.length && docSlots[slotsIndex].map((item,index)=>(
        <p onClick={()=>SetslotTime(item.time)} key={index} className={`text-sm font-normal flex-shrink-0 px-6  py-4 rounded-lg cursor-pointer ${item.time==slotTime? ' bg-purple-600 text-white font-semibold ': 'text-gray-500 border border-gray-300'} `}>
          {item.time.toLowerCase()}
        </p>
      ))}
    </div>
    <button className="bg-primary mt-8 text-white text-sm font-light px-14 py-5 rounded-full ">Book an Appointment</button>
   </div>

     
      </div>
    )
  );
};

export default Appointment;
