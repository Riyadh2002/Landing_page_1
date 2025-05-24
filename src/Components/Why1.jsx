import React from 'react'
import one from "../Components/images/1.png"

export default function Why() {
    return (
        <>
            <div  className="w-full h-[500px] bg-white shadow-[0_4px_1rem_rgba(3,152,162,0.25)] ">
                <div className='p-10 '> <h1 className='font-montserrat text-4xl font-bold text-fintech'>Why Us?</h1></div>
                <div className='flex justify-between'>
                    {/* left */}
                    <div className='ml-10  hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <img className='h-[350px] ' src={one} alt="" />
                    </div>
                    {/* right */}
                    <div className="max-w-md font-montserrat text-left space-y-4 my-10 mr-12 items-center justify-center">
                        <p className="mt-7 text-3xl font-semibold text-fintech relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-[-0.5rem] before:text-fintech before:text-5xl">
                            Everything in One Place
                        </p>
                        <div>
                            <p className="text-sm text-fintech ">
                                We use advanced encryption and industry-standard security <br />protocols to protect your financial information — just <br />like your bank does. You stay in control, always.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
