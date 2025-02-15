import { div } from 'framer-motion/client'
import React from 'react'
import employ from '/heroimg.jpg'
import Eccom from '../assets/Ecommerce picture.webp'
import Headset from '../assets/headset.webp'
import Flower from '../assets/flower.webp'
import { FaLink, FaGithub } from 'react-icons/fa'
const project=[
    {
        id:1,
        name: 'Shophere Ecommerce',
        technologies:'MERN STACK',
        image: Eccom,
        github: 'https://github.com/Divinejay-001/Shoppy',
        link:'https://shoppy-cx1x.onrender.com'
         },
         {
             id:2,
             name: 'Headset Website',
             technologies:'FRONTEND',
             image: Headset,
             github: 'https://github.com/Divinejay-001/Headset-website',
             link:'https://headset-dcj.onrender.com'

         },
         {
             id:3,
             name: 'Flower App',
             technologies:'FRONTEND',
        image: Flower,
        github: 'https://github.com/Divinejay-001/Flower-website',
        link:'https://flower-store.onrender.com'

         },
        //  {
        //      id:4,
        //      name: 'Lorem ,ipsum.',
        //      technologies:'MERN STACK',
        //      image: 'employ',
        //      github: 'http://github.com',
        //      link:'https://shoppy-cx1x.onrender.com'
        //  },
        //  {
        //      id:5,
        //      name: 'Lorem ,ipsum.',
        //      technologies:'MERN STACK',
        // image: 'employ',
        // github: 'http://github.com',
        // link:'https://shoppy-cx1x.onrender.com'
        //  },
        //  {
        //      id:6,
        //      name: 'Lorem ,ipsum.', 
        //      technologies:'MERN STACK',
        // image: 'employ',
        // github: 'http://github.com',
        // link:'https://shoppy-cx1x.onrender.com'
        //  }
]

const Project = () => {
  return (
    <div className='bg-black text-white
    py-10' id='project'>
        <div  className='container mx-auto px-8 
        md:px-16 lg:px-24'>
        <h2 data-aos='zoom-in'  className='text-4xl font-bold
        text-center mb-12'>My Projects</h2>
        <div  className='grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 gap-8'>
{project.map(project =>(
    <div data-aos='fade-up' key={project.id}  className='
    bg-gray-800 p-6 rounded-lg hover:shadow-lg
    transform transition-transform duration-300 hover:scale-105' >
        <img src={project.image} alt="" className='rounded-lg object-cover w-full h-48 mb-4 ' />
        <h3 className='text-2xl font-bold mb-12'>{project.name}</h3>
        <p className='text-gray-400 mb-4'>{project.technologies}</p>
        <div className='flex flex-col sm:flex-row gap-3 items-center justify-between'>
            <a href={project.github} target="_blank" rel='noopener noreferrer'
                  className=' flex  items-center gap-2 bg-gradient-to-r from-purple-500
                  to-blue-500 text-white px-4 py-2 rounded-full  hover:border-blue-400 hover:shadow-[0_0_20px_blue]'>GitHub Repo  <FaGithub className='block lg:hidden'/></a>
            <div className='flex items-center'>
                <a href={project.link}  target="_blank" rel='noopener noreferrer'
                      className=' flex  items-center gap-2 bg-gradient-to-r from-purple-500
                      to-blue-500 text-white px-4 py-2 rounded-full  hover:border-blue-400 hover:shadow-[0_0_20px_blue]'>Website Link   <FaLink/></a>
                        
            </div>
                  
        </div>
    </div>
))}
            </div>
            </div>
            </div>
              )
}

export default Project