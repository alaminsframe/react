import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between items-center bg-gray-800 p-4">
          <div>
              <img src="https://img.freepik.com/free-vector/education-logo-template_1107-22.jpg" alt="Logo" className="h-10" />
          </div>
          
          <div className="flex space-x-6">
              <a href="#home" className="text-white hover:text-gray-300">Home</a>
              <a href="#about" className="text-white hover:text-gray-300">About Us</a>
              <a href="#services" className="text-white hover:text-gray-300">Services</a>
              <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </div>
      </nav>
    </div>
  )
}

export default Nav
