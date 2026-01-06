import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-bg text-text relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center"
      >
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://i.pinimg.com/736x/b9/d3/47/b9d3472d6d67f02003a6d317066ab626.jpg"
            alt="Divinegift portrait"
            className="w-60 h-60 rounded-full object-cover border border-border"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            About Me
          </h2>

          <p className="text-muted text-lg leading-relaxed mb-6">
            I’m a frontend developer focused on building clean, responsive, and
            scalable web applications. I enjoy working on products that solve
            real problems and are easy for users to interact with.
          </p>

          <p className="text-muted text-lg leading-relaxed mb-8">
            I mainly work with React and modern frontend tools to build landing
            pages, dashboards, and small SaaS products. I value clarity,
            maintainability, and performance in every project I work on.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "JavaScript",
              "Tailwind CSS",
              "Supabase",
              "Firebase",
              "Node.js",
              "MongoDB",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm rounded-md bg-surface text-muted border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
