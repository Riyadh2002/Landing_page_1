import React from 'react'

export default function Subscription() {
  return (
    <>
    <div className="font-montserrat flex flex-col md:flex-row justify-center items-center gap-6 p-6 bg-gray-100 min-h-screen min-h-screen bg-gradient-to-r from-blue-50 to-teal-100 py-10">
        

  {/* Subscription Cards */}
  <div className="flex justify-center flex-wrap gap-6"></div>
  {/* Basic Plan */}
  <div className="w-72 bg-white rounded-xl shadow-md p-6 hover:scale-105 transition">
    <h2 className="text-xl font-bold text-center text-gray-800">Basic</h2>
    <p className="text-center text-6xl font-semibold mt-2 text-fintech">$9<span className="text-sm text-gray-600">/month</span></p>
    <ul className="text-sm mt-4 space-y-2 text-gray-600">
      <li>✔ Feature A</li>
      <li>✔ Feature B</li>
      <li>✘ Feature C</li>
    </ul>
    <button className="w-full mt-6 bg-fintech text-white py-2 rounded-md hover:bg-teal-700 transition">Choose Plan</button>
  </div>

  {/* Pro Plan */}
  <div className="w-72 h-[400px] bg-white rounded-xl shadow-md p-6 hover:scale-105 transition border-2 border-fintech">
    <h2 className="text-xl font-bold text-center text-gray-800">Pro</h2>
    <p className="text-center text-7xl font-semibold mt-2 text-fintech">$19<span className="text-sm text-gray-600">/month</span></p>
    <ul className="text-sm mt-4 space-y-3 text-gray-600">
      <li>✔ Feature A</li>
      <li>✔ Feature B</li>
      <li>✔ Feature C</li>
    </ul>
    <button className="w-full mt-6 bg-fintech text-white py-2 rounded-md hover:bg-teal-700 transition">Choose Plan</button>
  </div>

  {/* Premium Plan */}
  <div className="w-72  bg-white rounded-xl shadow-md p-6 hover:scale-105 transition">
    <h2 className="text-xl font-bold text-center text-gray-800">Premium</h2>
    <p className="text-center text-6xl font-semibold mt-2 text-fintech">$29<span className="text-sm text-gray-600">/month</span></p>
    <ul className="text-sm mt-4 space-y-2 text-gray-600">
      <li>✔ All Features</li>
      <li>✔ Priority Support</li>
      <li>✔ Early Access</li>
    </ul>
    <button className="w-full mt-6 bg-fintech text-white py-2 rounded-md hover:bg-teal-700 transition">Choose Plan</button>
  </div>
</div>

    </>
  )
}
