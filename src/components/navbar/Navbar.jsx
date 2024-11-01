/* eslint-disable no-unused-vars */
import React from "react";
import { SocialMedia } from "./SocialMedia";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { DatePicker } from "./DatePicker";
import { useState } from "react";
export const Navbar = () => {
  // State to control the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle function for the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Function to close the dropdown when a link is clicked
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="navbar bg-base-100 justify-between items-center ">
        <div >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
                onClick={toggleDropdown} // Added onClick handler
              >
                {isDropdownOpen ? (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg> // Close icon
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg> // 3 dot icon
                )}
              </div>
              {isDropdownOpen && ( // Conditional rendering based on state
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  onClick={closeDropdown} // Added to close the dropdown when clicked
                >
                  <NavLink />
                </ul>
              )}
            </div>
          </div>
        </div>
        {/* ================================================== */}
        <div>
          <div>
            <a>
              {" "}
              <Logo />
            </a>
          </div>
        </div>
        {/* ==================================================== */}
        <div>
          <div>
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Social Media</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <SocialMedia />
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
