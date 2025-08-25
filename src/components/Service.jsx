import { motion } from "framer-motion";
import { Code2, Layout, Database } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: <Layout className="w-10 h-10 text-purple-400" />,
    title: "Frontend Development",
    desc: "Building modern, responsive, and user-friendly interfaces with React.js.",
  },
  {
    icon: <Database className="w-10 h-10 text-purple-400" />,
    title: "Backend Development",
    desc: "Creating scalable APIs & databases with Node.js and MongoDB.",
  },
  {
    icon: <Code2 className="w-10 h-10 text-purple-400" />,
    title: "Web3 Integration",
    desc: "Integrating smart contracts and blockchain solutions into apps.",
  },
];

function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5,
    }));

    function animate() {
      ctx.fillStyle = "rgba(15, 15, 40, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 relative text-gray-300 overflow-hidden"
    >
      {/* Galaxy background */}
      <GalaxyBackground />
<div
  className="absolute top-0 left-0 w-40 h-[500px] 
  bg-gradient-to-b from-purple-500 to-transparent 
  blur-xl opacity-60 rotate-[-20deg] transform origin-top-left"
></div>
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 70 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 25px rgba(124,58,237,0.3)",
              }}
              className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, 10, -10, 0] }}
                className="flex justify-center mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
