// Navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import NavbarItem from '../ui/NavbarItem/NavbarItem';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search submission logic
    console.log('Search submitted:', searchQuery);
  };

  return (
    <>
      <nav className="text-[#1A1A1A] mx-32 px-8 my-4">
        <div className="container mx-auto flex items-center justify-between relative">
          <div className="font-bold text-xl">Repiblic Logo</div>

          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="focus:outline-none">
              {isOpen ? (
                <FontAwesomeIcon icon={faCircleXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>

          <div
            className={`${
              isOpen
                ? 'flex flex-col justify-center items-center absolute top-16 bg-[#F7F7F7] w-full py-6'
                : 'hidden'
            } lg:flex lg:items-center lg:w-auto`}
          >
            <ul className="lg:flex justify-center items-center">
              <li>
                <NavbarItem content="Investors" />
              </li>
              <li>
                <NavbarItem content="Businesses" />
              </li>
              <li>
                <NavbarItem content="Login" />
              </li>
              <li>
                <NavbarItem content="Signup" />
              </li>
            </ul>

            <div className="flex items-center pl-4">
              <form onSubmit={handleSearchSubmit} className="mr-4">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="bg-[#EEEEEE] text-gray-600  px-4 py-2 rounded-md focus:outline-none"
                />
                <button type="submit" className="ml-2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <div className="border border-[#E6E6E6]"></div>
    </>
  );
};

export default Navbar;
