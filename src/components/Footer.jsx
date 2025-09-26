import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="py-8 bg-gray-950 border-t border-purple-500/20 text-center text-gray-400">
      <p className="mb-3">
        © {new Date().getFullYear()} <span className="text-purple-400 font-bold">Divinora</span>. All rights reserved.
      </p>
      <div className="flex justify-center gap-6">
        <a href="https://www.linkedin.com/in/divinegift-johnson-739977324/" className="hover:text-purple-400 border px-2 py-2 rounded transition">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/Divinejay-001" className="hover:text-purple-400 border px-2 py-2 rounded transition">
          <FaGithub size={20} />
        </a>
        <a href="https://x.com/DivinoraHQ" className="hover:text-purple-400 border px-2 py-2 rounded transition">
          <FaTwitter size={20} />
        </a>
      </div>
    </footer>
  );
}
