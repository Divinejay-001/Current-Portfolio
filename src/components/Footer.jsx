export default function Footer() {
  return (
    <footer className="py-8 bg-gray-950 border-t border-purple-500/20 text-center text-gray-400">
      <p className="mb-3">
        © {new Date().getFullYear()} <span className="text-purple-400 font-bold">Divinora</span>. All rights reserved.
      </p>
      <div className="flex justify-center gap-6">
        <a href="#" className="hover:text-purple-400 transition">LinkedIn</a>
        <a href="#" className="hover:text-purple-400 transition">GitHub</a>
        <a href="#" className="hover:text-purple-400 transition">Twitter</a>
      </div>
    </footer>
  );
}
