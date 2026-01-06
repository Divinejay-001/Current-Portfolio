import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Btn from "../Btn";

const ContactSection = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "service_o2mv64m",
        "template_wnxfh8q",
        form.current,
        "-6O_x7lhtYIqwaClF"
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
    <section id="contact" className="relative py-24 bg-bg text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm currently available for freelance work, contract roles, and
            frontend-focused projects. Feel free to reach out if you'd like to
            discuss a project or opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-3">Get In Touch</h3>
              <p className="text-gray-400">
                Have a project in mind? Let's connect and build something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:divinegiftjohnson21@gmail.com"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📧
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white group-hover:text-purple-400 transition-colors break-all">
                    divinegiftjohnson21@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+234-9127064183</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Uyo, Akwa Ibom State, Nigeria</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0E0E11] border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0E0E11] border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0E0E11] border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none"
              />
            </div>

            <Btn 
              disabled={isLoading} 
              text={isLoading ? "Sending..." : "Send Message"} 
            />

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-4"
              >
                <span className="text-xl">✅</span>
                Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4"
              >
                <span className="text-xl">❌</span>
                Failed to send message. Please try again later.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;