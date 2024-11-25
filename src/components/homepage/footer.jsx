import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4">
            <img src="/logo.png" alt="Lumo Logo" className="h-10" />
            <p className="text-sm font-semibold tracking-wide">POWERING POTENTIAL</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>

        {/* Additional Links */}
        <div className="text-center md:text-left">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Advertise with us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tech & Partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Get in Touch
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-400">
            Level 3, 37 Galway Street
            <br />
            Britomart, Auckland
          </p>
          <p className="mt-2 text-sm text-gray-400">
            (09) 666 0700
            <br />
            hello@lumodigital.nz
          </p>
        </div>

        {/* Buttons and Copyright */}
        <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          <div className="text-center md:text-right text-sm text-gray-400">
            <p>Copyright © Lumo</p>
            <p className="mt-1">Website by Psychoactive Studios</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
