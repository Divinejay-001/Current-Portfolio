import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Divinegift
        </h1>
        <div className="hidden md:flex gap-6 text-gray-200">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-200">
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col bg-black/80 p-6 space-y-4">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-200 hover:text-purple-400 transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
