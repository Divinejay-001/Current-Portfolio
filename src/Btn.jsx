import React from 'react'

const Btn = ({text}) => {
  return (
    <div className='flex justify-center items-center md:justify-start'>
    <button value='send' type='submit' className={`submitBtn bg-gradient-to-r from-primary to-blue-700 text-white 
transform transition-transform duration-300 
hover:scale-105 px-8  md:px-24 py-2 rounded-md`}>
       {text}
       
   </button>
    </div>
  )
}

export default Btn