import React from 'react'
import one from "../Components/images/2.jpg"
import two from "../Components/images/1.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faVideo, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Comments() {
    return (
        <>
            <div className='w-full h-[400px] bg-white shadow-[0_4px_1rem_rgba(3,152,162,0.25)]'>
                {/* Top */}
                <div className='p-10'>
                    <h1 className='font-montserrat text-4xl font-bold text-fintech'>What Our Clients Say</h1>
                </div>

                {/* down */}
<div className='flex justify-center items-center space-x-6 mt-10'>
  
  {/* Left Card */}
  <div className='h-[122px] w-[380px] shadow-[0_4px_1rem_rgba(3,152,162,0.25)] bg-white flex items-center rounded-xl rounded-l-full hover:scale-105 transition-transform duration-300 ease-in-out'>
    <div className='h-[122px] w-[122px] rounded-full bg-fintech border-[3px] border-white overflow-hidden'>
      <img
        src={two}
        alt="John M."
        className="h-full w-full object-cover"
      />
    </div>
    <div className="text-white font-montserrat h-[100px] pl-6 pt-2">
      <p className="font-semibold text-base text-fintech">John M.| CFO, MetroPay</p>
      <p className="text-[10px] mt-1 text-fintech leading-snug text-left">
        “This app changed the way we <br /> manage finances — it’s <br />
        fast, reliable, and super secure.”
      </p>
      <div className="flex space-x-1 text-fintech mt-1">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  </div>

  {/* Right Card */}
  <div className='h-[122px] w-[380px] shadow-[0_4px_1rem_rgba(3,152,162,0.25)] bg-white flex items-center rounded-r-xl rounded-l-full hover:scale-105 transition-transform duration-300 ease-in-out'>
    <div className='h-[122px] w-[122px] rounded-full bg-fintech border-[3px] border-white overflow-hidden'>
      <img
        src={one}
        alt="John M."
        className="h-full w-full object-cover"
      />
    </div>
    <div className="text-white font-montserrat h-[100px] pl-6 pt-2">
      <p className="font-semibold text-base text-fintech">Sarah R. | Founder, FinHub</p>
      <p className="text-[10px] mt-1 text-fintech leading-snug text-left">
        “This app changed the way we <br /> manage finances — it’s <br />
        fast, reliable, and super secure.”
      </p>
      <div className="flex space-x-1 text-fintech mt-1">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  </div>

</div>

            </div>
        </>
    )
}
