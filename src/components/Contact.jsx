import React, { useRef } from 'react'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
const Contact = () => {
const form = useRef()
const sendEmail = (e) => {
    e.preventDefault();
  
    // Disable the submit button to prevent duplicate submissions
    const submitButton = document.querySelector('.submitBtn');
    submitButton.disabled = true;
  
    emailjs
      .sendForm('service_o2mv64m', 'template_wnxfh8q', form.current, '-6O_x7lhtYIqwaClF')
      .then(
        (result) => {
          console.log(result.text);
          // Alert the user that the message has been sent
          alert("Message sent successfully!");
          // Reset the form after submission
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          // Alert the user in case of failure
          alert("Failed to send message, please try again later.");
        }
      )
      .finally(() => {
        // Re-enable the submit button after the request is complete
        submitButton.disabled = false;
      });
  };
  return (
<div className='bg-black text-white
    py-20' id='contact'>
        <div className='container mx-auto px-8 
        md:px-16 lg:px-24'>
        <h2 data-aos='zoom-in' className='text-4xl font-bold
        text-center mb-12'>Contact</h2>
        <div className='flex flex-col md:flex-row
        items-center md:space-x-12'>
          
            <div data-aos='fade-up' className='flex-1'>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text 
               bg-gradient-to-r from-green-400 to-blue-500 mb-4 
               animate-pulse">
    Let's Talk
</h3>
<p className="text-gray-700 dark:text-gray-300">
    Have a project in mind? Let's connect and bring your ideas to life with a high-quality web solution.
</p>

           <div className='mb-4 mt-8'>
            <FaEnvelope className='inline-block 
            text-green-400 mr-2'/>
            <a href='mailto:youremail@example.com' className='
            hover:underline'>your@email.com</a>
           </div>
           <div className='mb-4 '>
            <FaPhone className='inline-block 
            text-green-400 mr-2'/>
            <span>+234-9127064183</span>
           </div>
           <div className='mb-4 mt-8'>
            <FaMap className='inline-block 
            text-green-400 mr-2'/>
           <span>Uyo, Akwa Ibom State Nigeria</span>
           </div>
            </div>
            <div data-aos='fade-left' className='flex-1 w-full'>
        <form className='space-y-4' action="" ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="name" className='block mb-2'>Your Name</label>  
              <input type="text" id="name" 
              name="name" required className='w-full p-2
              rounded bg-gray-800 border border-gray-600
              focus:outline-none focus:border-green-400 '
              placeholder='Enter Your Name'/>
            </div>
            <div>
              <label htmlFor="email" className='block mb-2'>Your Email</label>  
              <input type="text" id="email" 
              name="email" required className='w-full p-2
              rounded bg-gray-800 border border-gray-600
              focus:outline-none focus:border-green-400 '
              placeholder='Enter Your Email'/>
            </div>
            <div>
              <label htmlFor="message" className='block mb-2'>Message</label>  
              <textarea type="text" id="email" 
              name="msg" required className='w-full p-2
              rounded bg-gray-800 border border-gray-600
              focus:outline-none focus:border-green-400 '
             rows="5"
             placeholder='Enter Your Message'/>
             </div>
             <div className='flex justify-center items-center md:justify-start'>
             <button value='send' type='submit' className='submitBtn bg-gradient-to-r from-purple-500 to-blue-600 text-white 
        transform transition-transform duration-300 
      hover:scale-105  px-24 py-2 rounded-md'>
                Send
            </button>
             </div>
        </form>
            </div>
        </div>
        </div>
    </div>
      )
}

export default Contact