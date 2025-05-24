import React from 'react'

export default function Fifty() {
    return (
        <>
            <div className='shadow-[0_4px_1rem_rgba(3,152,162,0.25)] w-full h-[250px] bg-fintech text-white shadow-lg flex flex-col items-center items-center justify-center font-montserrat'>
                <div className="bg-fintech flex items-center px-8 py-10 gap-10">
                    <div className="text-white text-center">
                        <p className="text-8xl font-bold">50+</p>
                        <p className="text-sm text-left tracking-wide">Companies Trust</p>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-1 h-24 bg-white opacity-50 mx-20" ></div>

                    <div className="text-white text-center">
                        <p className="text-8xl font-bold">1M+</p>
                        <p className="text-sm text-left  tracking-wide">Transaction Processed</p>
                    </div>
                </div>

            </div>
        </>
    )
}
