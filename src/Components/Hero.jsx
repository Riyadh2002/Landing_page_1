import React from 'react'
import logo from"../Components/images/logo.png"
import bank from"../Components/images/bank.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons'; 
import { faVideo, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Hero() {
  return (
    <>
   <div className="w-full bg-zinc-900 text-white shadow-lg flex flex-col items-center className='scroll-smooth'">
  {/* Outer fixed width frame (responsive) */}
  <div className="max-w-[1100px] w-full flex flex-col">

    {/* Top Bar */}
    <div className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-8 py-4 bg-white pt-6 gap-4 md:gap-0">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-10 h-10 object-cover rounded-full" />
        <a href="#" className="text-fintech text-xl sm:text-2xl font-bold">FinTech</a>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-center">
        <a href="#" className="hover:text-blue-400 font-normal text-fintech">Home</a>
        <a href="#" className="hover:text-blue-400 font-normal text-fintech">Contact us</a>
        <a href="#subscription" className="hover:text-blue-400 font-normal text-fintech">Pricing</a>
      </div>

      {/* Search */}
      <div className="relative w-full sm:max-w-xs md:w-56 ml-10">
  <input
    type="text"
    placeholder="Search..."
    className="bg-fintech pl-10 pr-4 py-2 rounded-full text-sm w-full text-black placeholder-white"
  />
  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white ml-r-10">
    <FontAwesomeIcon icon={faMagnifyingGlass} />
  </div>
</div>


      {/* Profile */}
      <div>
        <FontAwesomeIcon icon={faUser} className="text-fintech text-xl" />
      </div>
    </div>

    {/* Main Content Area */}
    <div className="flex flex-col md:flex-row bg-white px-4 sm:px-6 md:px-10 py-12 sm:py-16 justify-between items-center gap-10">
      
      {/* Left side content */}
      <div className="w-full md:max-w-3xl flex flex-col justify-center items-start text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-fintech leading-[2.8rem] sm:leading-[3.2rem] md:leading-[3.8rem]">
          Control Your Finances,<br />
          Grow Your Business — <br />
          All in One Place
        </h1>

        <p className="text-sm text-fintech mb-6">
          From expense tracking to investment planning — manage it all with our secure, smart platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className=" hover:scale-105 transition-transform duration-300 ease-in-out bg-transparent border border-fintech px-5 py-3 rounded-md hover:bg-fintech hover:text-white flex items-center justify-center gap-2 text-fintech">
            <FontAwesomeIcon icon={faVideo} />
            Watch Demo
          </button>

          <button className="hover:scale-105 transition-transform duration-300 ease-in-out shadow-[0_4px_1rem_rgba(3,152,162,0.25)] px-5 py-3 rounded-full hover:bg-zinc-800 bg-fintech flex items-center justify-center gap-2 text-white">
            Get Started
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* Right side image */}
      <div className="w-full sm:w-[400px] md:w-[500px] h-[250px] sm:h-[280px] md:h-[300px] rounded-xl border-8 border-white shadow-[0_4px_1rem_rgba(3,152,162,0.25)] overflow-hidden">
        <img 
          src={bank}
          alt="Finance Illustration" 
          className="object-cover w-full h-full border-8 border-white" 
        />
      </div>
    </div>

  </div>
</div>





    </>
  )
}
