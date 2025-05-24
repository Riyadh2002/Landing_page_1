import React from 'react'
import icon from "../Components/images/2.png"
export default function Bank3() {
  return (
    <>
    <div className='w-full h-[500px] bg-white shadow-[0_4px_1rem_rgba(3,152,162,0.25)]'>
                    
                    <div className='flex justify-between p-10 justify-center items-center' >
                        {/* left */}
                        <div className='my-10 hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img className='h-[260px] mt-10' src={icon} alt="" />
                        </div>
    
    
                        {/* right */}
                        

                        <div className="max-w-md font-montserrat text-left space-y-4 my-10 mr-12 items-center justify-center">
                            <p className="mt-7 text-3xl font-semibold text-fintech relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-[-0.5rem] before:text-fintech before:text-5xl">
                                Bank-Level Security
                            </p>
                            <div>
                                <p className="text-sm text-fintech">
                                    We use advanced encryption and industry-standard security <br />protocols to protect your financial information — just <br />like your bank does. You stay in control, always.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}
