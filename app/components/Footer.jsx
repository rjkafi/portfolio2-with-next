import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#070307fb] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side - Name and Title */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">MD. Abdullah All Kafi</h1>
          <p className="text-sm text-gray-400 mt-1">Front-End DEVELOPER</p>
        </div>

        {/* Right Side - Navigation Links */}
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-rose-400 transition">About</a>
          <a href="#projects" className="hover:text-rose-400 transition">Projects</a>
          <a href="#skills" className="hover:text-rose-400 transition">Skills</a>
          <a href="#contact" className="hover:text-rose-400 transition">Contact</a>
        </nav>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-5 text-gray-400 text-lg">
          <a href="https://www.facebook.com/profile.php?id=100078846277290" className="hover:text-rose-400 transition"><FaFacebookF /></a>
          <a href="https://github.com/rjkafi" className="hover:text-rose-400 transition"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/abdullah-all-kafi/" className="hover:text-rose-400 transition"><FaLinkedinIn /></a>
        </div>

        {/* Credit */}
        <p className="text-gray-400 text-sm text-center md:text-right">
           Developed by <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">MD. Abdullah All Kafi</span><br />
          © 2025 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
