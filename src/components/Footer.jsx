import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-[#0E0E11] border-t border-[#262626] text-center text-[#A1A1AA]">
      <p className="mb-4 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#14B8A6] font-bold">Divinora</span>. All rights reserved.
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/divinegift-johnson-739977324/"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[#262626] text-[#A1A1AA] hover:bg-[#14B8A6] hover:text-[#0E0E11] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="https://github.com/Divinejay-001"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[#262626] text-[#A1A1AA] hover:bg-[#14B8A6] hover:text-[#0E0E11] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://x.com/DivinoraHQ"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[#262626] text-[#A1A1AA] hover:bg-[#14B8A6] hover:text-[#0E0E11] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={20} />
        </a>
      </div>
    </footer>
  );
}
