import React, { useState } from 'react'
import Responsive from './Responsive'
import { FaX } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [open, setOpen ]=  useState(false)
  return (
    <nav className='bg-black text-white flex items-center px-8  md:16 lg:24'>
        <div className='container py-2 flex justify- md:justify-between
        items-center'>
        <div className='text-3xl   font-bold '>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 '>Div</span><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-700'>ine</span>
        </div>
        <div className='hidden md:block space-x-4 md:space-x-6  '> 
            <a activeClass='active'  href="#" className='hover:text-gray-400'>Home</a>
            <a activeClass='active' href="#about" className='hover:text-gray-400'>About Me</a>
            <a activeClass='active' href="#service" className='hover:text-gray-400'>Services</a>
            <a activeClass='active' href="#project" className='hover:text-gray-400'>Project</a>
            <a activeClass='active' href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <a href="#contact">
          <button className='bg-gradient-to-r from-purple-500 to-blue-600 text-white hidden md:inline
          transform transition-transform duration-300 
                hover:scale-105 px-4 py-2 rounded-full  hover:border-blue-400 hover:shadow-[0_0_20px_blue] '>Contact Me</button>
        </a>
      {/* Mobile Menu */}
    
        </div>
        <div className='md:hidden relative  ' onClick={()=>setOpen(!open)}>
{
  open ? (
    <FaX className='text-3xl' />
  ):(
    <GiHamburgerMenu className='text-3xl'/>
  ) 
}
<Responsive open={open}/>
      </div>
    </nav>
  )             
}

export default Navbar