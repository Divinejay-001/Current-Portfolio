import { init } from 'aos'
import React from 'react'


const services = [
    {
        id: 1,
        title: "Web Design",
        description: "Creating visually appealing, user-friendly, and responsive web designs that enhance user experience.",
    },
    {
        id: 2,
        title: "Frontend Development",
        description: "Building dynamic and interactive user interfaces with modern frameworks like React.js for seamless web experiences.",
    },
    {
        id: 3,
        title: "Backend Development",
        description: "Developing robust and scalable server-side applications using Node.js and databases to ensure smooth functionality.",
    },
    {
        id: 4,
        title: "MERN Stack Development",
        description: "Full-stack development using MongoDB, Express.js, React.js, and Node.js to create high-performance web applications.",
    },
    {
        id: 5,
        title: "Effective Communication",
        description: "Ensuring clear, structured, and efficient communication to streamline project development and collaboration.",
    },
    {
        id: 6,
        title: "Digital Marketing",
        description: "Implementing SEO, social media, and content strategies to boost online visibility and business growth.",
    }
];

const Service = () => {
  return (
    <div className='bg-black text-white
        py-20' id='service'>
            <div className='container mx-auto px-8 
            md:px-16 lg:px-24'>
            <h2  data-aos='zoom-in' className='text-4xl font-bold
            text-center mb-12'>Services</h2>
            <div  className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-8'>
{services.map((service) =>(
    <div data-aos='fade-up'  key={service.id} className='
    bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg
    transform transition-transform duration-300 hover:scale-105'>
    <div className='text-right text-2xl font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-green-600 to-blue-400'>
{service.id}
    </div>
    <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-green-400 to-blue-500'>
{service.title}
    </h3>
    <p className='mt-2 text-gray-300'>{service.description}</p>
    <a href="#contact" className='mt-4 inline-block text-green-400 hover:text-blue-500 underline'>Hire Me</a>
    </div>
))}
            </div>
            </div>
            </div>
  )
}

export default Service