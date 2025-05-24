import React from 'react'
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <footer className="w-[1100px] mx-auto bg-gray-900 text-white py-10 px-6">
      <div className="flex flex-col items-center space-y-6">
        {/* Social Icons */}
        <div className="flex space-x-8 text-white text-2xl">
          <a href="#" aria-label="Facebook" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-red-600">
            <FaYoutube />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-10 text-white font-medium ">
            <li>
              <a href="#" className="hover:text-gray-400 text-white">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-white">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-white">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-white">Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
    </>
  )
}
