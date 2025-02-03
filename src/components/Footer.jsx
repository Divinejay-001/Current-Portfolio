import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
       <div className='container mx-auto px-8 
        md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12
        items-center mb-4'>
        <div className='flex-1 mb-4 md:mb-0'>
            <h3 className='text-2xl text-blue-500  font-bold mb-2'>Divine</h3>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sed excepturi doloribus aliquam deleniti quisquam?</p>
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
               <a className="p-2 border rounded-md hover:bg-gradient-to-r hover:from-purple-500 hoverto-blue-600 
              bg-[length:200%_200%] bg-left  
              transition-all duration-[1500ms] ease-in-out transform" 
   href="">
    <FaFacebook  className='text-2xl'/>
</a>

                <a href="" className="p-2 border rounded-md hover:bg-gradient-to-r hover:from-purple-500 hoverto-blue-600 
              bg-[length:200%_200%] bg-left  
              transition-all duration-[1500ms] ease-in-out transform">
                    <FaLinkedin className='text-2xl '/>
                </a>
                <a href="" className="p-2 border rounded-md hover:bg-gradient-to-r hover:from-purple-500 hoverto-blue-600 
              bg-[length:200%_200%] bg-left  
              transition-all duration-[1500ms] ease-in-out transform">
                    <FaTwitter className='text-2xl'/>
                </a>
                <a href="" className="p-2 border rounded-md hover:bg-gradient-to-r hover:from-purple-500 hoverto-blue-600 
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