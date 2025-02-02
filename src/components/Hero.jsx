import React from 'react'
import HeroImg from '/heroimg.webp'
import { useTypewriter } from '../../hooks/useTypewriter';
const Hero = () => {
  const displayText = useTypewriter("I'm Divine Johnson, Full-Stack Developer");

  return (
    <div  className=' bg-black text-white text-center py-14'>
      <div data-aos='zoom-in'>
        <img
          src={HeroImg}
          alt=""
          className='mx-auto mb-8 w-40 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
        />
        <h1 className='text-4xl font-bold min-h-[3rem]'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            {displayText}
          </span>
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
          I specialise in responsive web applications
        </p>
        <div className='mt-8 space-x-4'>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Contact Me
          </button>
          <button className='bg-gradient-to-r from-purple-500 to-red-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;