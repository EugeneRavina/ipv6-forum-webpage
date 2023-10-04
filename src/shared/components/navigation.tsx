import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-sky-800 p-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <img
                src="ipv6Phillogo.png"
                alt="Philippine IPv6 Council Logo"
                width="85"
              />
              <label className="text-white text-2xl font-semibold italic">
                The Philippine IPV6 Council
              </label>
            </div>
            <div>
              <img
                src="ipv6-global-logo.gif"
                alt="Global IPv6 Forum Logo"
                width="85"
              />
            </div>
          </div>
        </div>

        <nav>
          <div>
            {/* Desktop Menu */}
            <div className="flex justify-end mr-4">
              <div
                className={`hidden md:flex space-x-4 ${
                  isOpen ? 'hidden' : 'block'
                }`}
              >
                <a href="/" className="text-white hover:text-gray-300">
                  Our Home
                </a>
                <a href="/about" className="text-white hover:text-gray-300">
                  The Charter
                </a>
                <a href="/services" className="text-white hover:text-gray-300">
                  Our Mission
                </a>
                <a href="/contact" className="text-white hover:text-gray-300">
                  The Milestones
                </a>
                <a href="/contact" className="text-white hover:text-gray-300">
                  News
                </a>
                <a href="/contact" className="text-white hover:text-gray-300">
                  Events & Promotions
                </a>
                <a href="/contact" className="text-white hover:text-gray-300">
                  Affiliates
                </a>
                <a href="/contact" className="text-white hover:text-gray-300">
                  Zoom with the Experts
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <div className="">
                    <a
                      href="/"
                      className="text-white block hover:text-gray-300"
                    >
                      Home
                    </a>
                    <a
                      href="/about"
                      className="text-white block hover:text-gray-300"
                    >
                      About
                    </a>
                    <a
                      href="/services"
                      className="text-white block hover:text-gray-300"
                    >
                      Services
                    </a>
                    <a
                      href="/contact"
                      className="text-white block hover:text-gray-300"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
