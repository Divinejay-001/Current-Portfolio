import React, { useRef, useState } from 'react';
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Btn from '../Btn';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        'service_o2mv64m',
        'template_wnxfh8q',
        form.current,
        '-6O_x7lhtYIqwaClF'
      );
      console.log(result.text);
      alert('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      console.error(error.text);
      alert('Failed to send message, please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 data-aos="zoom-in" className="text-4xl font-bold text-center mb-12">
          Contact
        </h2>
        <div className="flex flex-col md:flex-row items-center md:gap-12">
          {/* Contact Details */}
          <div data-aos="" className="flex-1 lg:pr-14">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-500 to-blue-600 mb-4 animate-pulse"
            >
              Let's Talk
            </h3>
            <p className="text-gray-400">
              Have a project in mind? Let's connect and bring your ideas to life
              with a high-quality web solution.
            </p>

            <div className="mt-8 mb-4 lg:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:divinegiftjohnson21@gmail.com" className="hover:underline">
                  divinegiftjohnson21@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <FaPhone className="text-blue-400" />
                <span>+234-9127064183</span>
              </div>

              <div className="flex items-center gap-2">
                <FaMap className="text-blue-400 " />
                <span>Uyo, Akwa Ibom State, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" className="flex-1 w-full">
            <form className="space-y-4" ref={form} onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 hover:border-blue-400 hover:shadow-[0_0_20px_blue]"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 hover:border-blue-400 hover:shadow-[0_0_20px_blue]"
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="msg"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 hover:border-blue-400 hover:shadow-[0_0_20px_blue]"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>

              {/* Submit Button */}
              <Btn disabled={isLoading} text={isLoading ? 'Sending...' : 'Send'} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
