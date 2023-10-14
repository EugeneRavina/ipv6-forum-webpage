import React, { useState } from 'react';
import ipv6PhilLogo from '../../assets/images/ipv6Phillogo.png';
import ipv6GlobalLogo from '../../assets/images/ipv6-global-logo.gif';
import { Link } from 'react-router-dom';

function Navigation() {
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
                src={ipv6PhilLogo}
                alt="Philippine IPv6 Council Logo"
                width="85"
              />
              <label className="text-white text-2xl font-semibold italic">
                The Philippine IPV6 Council
              </label>
            </div>
            <div>
              <img
                src={ipv6GlobalLogo}
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
                <Link to="/" className="text-white hover:text-gray-300">
                  {' '}
                  Our Home
                </Link>
                <Link to="/charter" className="text-white hover:text-gray-300">
                  {' '}
                  The Charter{' '}
                </Link>
                <Link to="/mission" className="text-white hover:text-gray-300">
                  {' '}
                  Our Mission{' '}
                </Link>
                <Link
                  to="/milestones"
                  className="text-white hover:text-gray-300"
                >
                  {' '}
                  The Milestones{' '}
                </Link>
                <Link to="/news" className="text-white hover:text-gray-300">
                  {' '}
                  News{' '}
                </Link>
                <Link
                  to="/eventsAndPromotions"
                  className="text-white hover:text-gray-300"
                >
                  Events & Promotions
                </Link>
                <Link
                  to="/affliates"
                  className="text-white hover:text-gray-300"
                >
                  {' '}
                  Affiliates{' '}
                </Link>
                <Link
                  to="/zoomWithExperts"
                  className="text-white hover:text-gray-300"
                >
                  Zoom with the Experts
                </Link>
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
                    <Link
                      to="/"
                      className="text-white hover:text-gray-300 block text-center"
                    >
                      {' '}
                      Our Home
                    </Link>
                    <Link
                      to="/charter"
                      className="text-white hover:text-gray-300 block text-center"
                    >
                      {' '}
                      The Charter{' '}
                    </Link>
                    <Link
                      to="/mission"
                      className="text-white hover:text-gray-300 block text-center"
                    >
                      {' '}
                      Our Mission{' '}
                    </Link>
                    <Link
                      to="/milestones"
                      className="text-white hover:text-gray-300 block text-center"
                    >
                      {' '}
                      The Milestones{' '}
                    </Link>
                    <Link
                      to="/news"
                      className="text-white hover:text-gray-300 block text-center"
                    >
                      {' '}
                      News{' '}
                    </Link>
                    <Link
                      to="/eventsAndPromotions"
                      className="text-white hover:text-gray-300 block text-center"
                    >
                      Events & Promotions
                    </Link>
                    <Link
                      to="/affliates"
                      className="text-white hover:text-gray-300 block text-center"
                    >
                      {' '}
                      Affiliates{' '}
                    </Link>
                    <Link
                      to="/zoomWithExperts"
                      className="text-white hover:text-gray-300 block text-center"
                    >
                      Zoom with the Experts
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
