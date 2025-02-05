import React from 'react'
import AboutImg from '/heroimg.jpg'

const About = () => {
  return (
    <div className='bg-black text-white
    py-20' id='about'>
        <div className='container mx-auto px-8 
        md:px-16 lg:px-24'>
        <h2 data-aos='zoom-in' className='text-4xl font-bold
        text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row
        items-center md:space-x-12'>
            <img data-aos='fade-right' src={AboutImg} alt="" className='
            w-72 h-80 rounded object-cover border-2  mb-6 md:mb-0'/>
            <div className='flex-1'>
                <p data-aos='fade-up' className='text-lg mb-3'>
                I’m Divinegift, a skilled Web Developer specializing in HTML, CSS, JavaScript, React.js, and Node.js. I build fully functional, responsive, and high-performance websites tailored to client needs.

With a focus on clean code, user experience, and scalability, I create modern web solutions that drive results. I’m currently open for hiring and ready to bring your ideas to life.
      </p>
                <div data-aos='fade-up' className='space-y-4'>
                {/* <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-yellow-400 to-green-500 h-2.5 rounded-full 
        transform transition-transform duration-300 
      hover:scale-105 w-11/12'>

                    </div>
                    </div>
                   </div>
                <div className='flex items-center'>
                    <label htmlFor="React JS" className='w-2/12'>React JS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-yellow-400 to-green-500 h-2.5 rounded-full 
        transform transition-transform duration-300 
      hover:scale-105 w-11/12'>

                    </div>
                    </div>
                   </div>
                   <div className='flex items-center'>
                    <label htmlFor="Node JS" className='w-2/12'>Node JS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-yellow-400 to-green-500 h-2.5 rounded-full 
        transform transition-transform duration-300 
      hover:scale-105 w-10/12'>

                    </div>
                    </div>
                   </div> */}
                </div>
                <div  data-aos='fade-up' className=' flex justify-between
                text-center'>
              <div className='flex items-center gap-3'>
                <h3  className='text-2xl font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-green-400 to-blue-500'>
                    3+
                </h3>
                <p>Years of Experience</p>
                </div>          
                {/* <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-green-400 to-blue-500'>
                50+
                </h3>
                <p>Projects Completed</p>
                </div>           */}
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About