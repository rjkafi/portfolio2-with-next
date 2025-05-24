'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";

export default function Navbar() {
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  
  
  
    const downloadResume = () => {
      saveAs("./Resume.pdf", "Resume.pdf");
    };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // activate on scroll > 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },   
  ];

  const renderLinks = (
    <>
      {links.map((link, index) => (
        <Link
          href={ link.path }
          key={index}
           className={` ${
            link.path === pathName ? 'text-rose-500  border-purple-60 border-b-2'
              : 'text-white hover:text-rose-500 hover:border-b-2 hover:border-purple-400'
          } hover:text-rose-500 transition-all` }
        >
          {link.name}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <div
        className={`sticky top-0 z-50 w-full transition-all duration-400 ${
          isScrolled
            ? "backdrop-blur-md bg-[#1e1e1e]/80 shadow-md border-b "
            : "bg-transparent border-b border-gray-600 shadow-2xl"
        }`}
      >
        <div className="navbar max-w-screen-lg mx-auto md:px-5 text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  bg-[#1e1e1e]/80 backdrop-blur-xl shadow-rose-400 rounded-box z-10 mt-3 w-52 p-2 shadow space-y-2"
              >
                {renderLinks}
              </ul>
            </div>
            <h4 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-300 animate-gradient-x">Kafi</h4>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-x-5">
              {renderLinks}
            </ul>
          </div>
          <div className="navbar-end">
            <a  onClick={downloadResume} className="btn">Resume</a>
          </div>
        </div>
      </div>
    </>
  );
}
