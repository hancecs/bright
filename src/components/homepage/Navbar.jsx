import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-transparent fixed w-full p-5 flex justify-between items-center">
      <img src="/logo.png" alt="Lumo Logo" className="h-10" />
      <nav className="flex space-x-6">

        <a to="/networks" className="text-red-600 font-medium cursor-pointers">Our Network</a>
        <a href="#" className="text-red-600 font-medium">Advertise with us</a>
        <a
          href="#"
          className="px-4 py-2 border-2 border-white text-white rounded-md hover:bg-white hover:text-red-600 transition"
        >
          Get In Touch
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
