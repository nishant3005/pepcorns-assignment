import React from 'react';
import NavbarItem from '../ui/NavbarItem/NavbarItem';

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-32 px-8 my-4">
        <div className="flex justify-between items-center">
          <NavbarItem content="Republic Logo" />
          <NavbarItem content="Investors" />
          <NavbarItem content="Businesses" />

          <div className="flex items-center space-x-2">
            <div className="relative text-gray-600">
              <div className="absolute ml-4 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="u-block u-imageFluid pointer-events-none"
                >
                  <path
                    d="M16.2826 15.2176L13.5001 12.4576C14.5801 11.1109 15.1032 9.40152 14.9617 7.68103C14.8201 5.96053 14.0248 4.35964 12.7392 3.20753C11.4536 2.05543 9.77541 1.43968 8.04974 1.4869C6.32408 1.53412 4.68209 2.24072 3.46141 3.46141C2.24072 4.68209 1.53412 6.32408 1.4869 8.04974C1.43968 9.77541 2.05543 11.4536 3.20753 12.7392C4.35964 14.0248 5.96053 14.8201 7.68103 14.9617C9.40152 15.1032 11.1109 14.5801 12.4576 13.5001L15.2176 16.2601C15.2873 16.3303 15.3702 16.3861 15.4616 16.4242C15.553 16.4623 15.651 16.4819 15.7501 16.4819C15.8491 16.4819 15.9471 16.4623 16.0385 16.4242C16.1299 16.3861 16.2128 16.3303 16.2826 16.2601C16.4177 16.1202 16.4933 15.9333 16.4933 15.7388C16.4933 15.5443 16.4177 15.3574 16.2826 15.2176ZM8.25005 13.5001C7.2117 13.5001 6.19667 13.1921 5.33331 12.6153C4.46995 12.0384 3.79704 11.2185 3.39968 10.2591C3.00232 9.29983 2.89836 8.24423 3.10093 7.22583C3.3035 6.20743 3.80351 5.27197 4.53774 4.53774C5.27197 3.80351 6.20743 3.3035 7.22583 3.10093C8.24423 2.89836 9.29983 3.00232 10.2591 3.39968C11.2185 3.79704 12.0384 4.46995 12.6153 5.33331C13.1921 6.19666 13.5001 7.2117 13.5001 8.25005C13.5001 9.64244 12.9469 10.9778 11.9624 11.9624C10.9778 12.9469 9.64244 13.5001 8.25005 13.5001Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                name="search"
                placeholder="Search"
                autoComplete="off"
                className="bg-[#EEEEEE] h-10 pl-12 rounded-full focus:outline-none focus:bg-[#fff]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <NavbarItem content="Login" />
          <NavbarItem content="Signup" />
        </div>
      </div>
      <div className="border border-[#E6E6E6]"></div>
    </>
  );
};

export default Navbar;
