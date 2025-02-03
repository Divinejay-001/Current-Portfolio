import React from 'react'

const Responsive = ({open}) => {
  return (
    <div>
{open && (
<div className='grid items-center justify-center absolute top-16  -left-36 w-full h-screen z-20'>
    <div className='text-xl  font-semibold uppercase bg-gradient-to-r from-green-500/80 to-blue-600/80 text-white p-32 py-60 relative bottom-7 m-0 mx-auto rounded-sm'>
         <ul className='flex flex-col items-center gap-10 relative -top-32'>
      <a  href='/' className='inline-block px-4
                            hover:text-primary duration-200'>Home</a>
      <a href='#about'  className='inline-block px-4
                            hover:text-primary duration-200'>About</a>
      <a href='#service'  className='inline-block px-4
                            hover:text-primary duration-200'>Services</a>
      <a href='#project'  className='inline-block px-4
                            hover:text-primary duration-200'>Project</a>
      <a href='#contact' className='inline-block px-4
                            hover:text-primary duration-200'>Contact</a>
    </ul></div>
   
  
</div>
)

}
    </div>
  )
}

export default Responsive