import React, { useState } from "react";
import { FaBars, FaLinkedin, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    
    <nav className="navbar ">
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-slate-900">
        <div>
          <Link to="home" smooth duration={500}>
            <h1 className="text-3xl font-signature ml-2 cursor-pointer">
              Shweta Mahendra
            </h1>
          </Link>
        </div>

        <ul className="hidden md:flex">
          <li className="px-4 cursor-pointer">
            <Link to="home" smooth duration={500} className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="Author" smooth duration={500} className="hover:text-gray-400">
              Author
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="blog" smooth duration={500} className="hover:text-gray-400">
              Blog
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="about" smooth duration={500} className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="contact" smooth duration={500} className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            className="text-gray-500 p-2 focus:outline-none"
            onClick={() => setNav(!nav)}
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {nav && (
  <ul className="md:hidden flex flex-col justify-center items-center absolute top-20 left-0 w-full bg-slate-900 text-white">
    <li className="py-2 cursor-pointer">
      <Link to="home" smooth duration={500} onClick={() => setNav(false)}>
        Home
      </Link>
    </li>
    <li className="py-2 cursor-pointer">
      <Link to="Author" smooth duration={500} onClick={() => setNav(false)}>
        Author
      </Link>
    </li>
    <li className="py-2 cursor-pointer">
      <Link to="blog" smooth duration={500} onClick={() => setNav(false)}>
        Blog
      </Link>
    </li>
    <li className="py-2 cursor-pointer">
      <Link to="about" smooth duration={500} onClick={() => setNav(false)}>
        About
      </Link>
    </li>
    <li className="py-2 cursor-pointer">
      <Link to="contact" smooth duration={500} onClick={() => setNav(false)}>
        Contact
      </Link>
    </li>
    <li className="flex justify-center items-center space-x-4 py-2">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={20} className="hover:text-gray-400" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={20} className="hover:text-gray-400" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={20} className="hover:text-gray-400" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={20} className="hover:text-gray-400" />
      </a>
    </li>
  </ul>
)}

    </nav>
  );
};

export default Navbar;
