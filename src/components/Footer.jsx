import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
       <div data-aos='zoom-in' className='container mx-auto px-8 
        md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12
        items-center mb-4'>
        <div className='flex-1 mb-4 md:mb-0'>
            <h3 className='text-2xl text-blue-500  font-bold mb-2'>Divine</h3>
            <p className='text-gray-400'>      Let's build something amazing together. Stay updated on my latest projects, web development insights, and creative work by subscribing to my newsletter!
            </p>
        </div>
        <div className='flex-1 w-full'>
           <form className='flex items-center justify-center'>
            <input type="email" name="" id=""  placeholder='Enter Email'
            className='w-full p-2 rounded-l-lg bg-gray-900
            border border-gray-600 focus:outline-none 
            focus:border-green-400'/>
            <button type="submit" className='bg-gradient-to-r from-purple-500 to-blue-600 text-white 
        transform transition-transform duration-300 
      hover:scale-105  px-4 py-2 rounded-r-lg'>Subscribe</button>
            </form> 
        </div>
        </div>
        <div className='border-t border-gray-600 pt-4
        flex flex-col md:flex-row justify-between 
        items-center'>
            <p className='text-gray-400'>
                &copy; {new Date().getFullYear()} Divine. All rights reserved.
            </p>
            <div className='flex space-x-4 my-4 
            md:my-0'>
               <a className="p-2 border rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600  hover:border-blue-400 hover:shadow-[0_0_20px_blue]
              bg-[length:200%_200%] bg-left  
              transition-all duration-[1500ms] ease-in-out transform" 
   href="https://instagram.com/divinegiftchidalu">
    <FaInstagram className='text-2xl'/>
</a>

                <a href="https://www.linkedin.com/in/divinegift-johnson-739977324/" className="p-2 border rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600  hover:border-blue-400 hover:shadow-[0_0_20px_blue]
              bg-[length:200%_200%] bg-left  
              transition-all duration-[1500ms] ease-in-out transform">
                    <FaLinkedin className='text-2xl '/>
                </a>
                <a href="https://twitter.com/Divinegift9503" className="p-2 border rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600  hover:border-blue-400 hover:shadow-[0_0_20px_blue]
              bg-[length:200%_200%] bg-left  
              transition-all duration-[1500ms] ease-in-out transform">
                    <FaXTwitter className='text-2xl'/>
                </a>
                <a href="https://github.com/Divinejay-001" className="p-2 border rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600  hover:border-blue-400 hover:shadow-[0_0_20px_blue]
              bg-[length:200%_200%] bg-left  
              transition-all duration-[1500ms] ease-in-out transform">
                    <FaGithub className='text-2xl'/>
                </a>
            </div>
            
        </div>
        </div> 
    </footer>
  )
}

export default Footer