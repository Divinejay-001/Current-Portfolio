import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMap } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Btn from '../Btn';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        'service_o2mv64m',
        'template_wnxfh8q',
        form.current,
        '-6O_x7lhtYIqwaClF'
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error(error.text);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0F0F28] to-black text-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 shadow-lg space-y-6"
          >
            <h3 className="text-3xl font-semibold text-white mb-4">Let's Talk</h3>
            <p className="text-gray-300">
              Have a project in mind? Let’s connect and build something amazing together.
            </p>

            <div className="space-y-4 mt-6 text-sm md:text-lg">
              {[
                { icon: <FaEnvelope />, text: 'divinegiftjohnson21@gmail.com', link: 'mailto:divinegiftjohnson21@gmail.com' },
                { icon: <FaPhone />, text: '+234-9127064183' },
                { icon: <FaMap />, text: 'Uyo, Akwa Ibom State, Nigeria' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-purple-500/20 transition cursor-pointer"
                >
                  <span className="text-purple-400 w-5 h-5">{item.icon}</span>
                  {item.link ? (
                    <a href={item.link} className="text-white hover:underline">{item.text}</a>
                  ) : (
                    <span className="text-white">{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-purple-500/30 text-white focus:border-purple-400 focus:ring focus:ring-purple-400/20 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-purple-500/30 text-white focus:border-purple-400 focus:ring focus:ring-purple-400/20 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-purple-500/30 text-white focus:border-purple-400 focus:ring focus:ring-purple-400/20 transition"
            ></textarea>

            <Btn disabled={isLoading} text={isLoading ? 'Sending...' : 'Send Message'} />

            {/* Inline Feedback */}
            {status === "success" && (
              <p className="text-green-400 mt-2">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 mt-2">❌ Failed to send message. Please try again later.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
