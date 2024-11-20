import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const deskNav = [
    {
      id: 0,
      name: "হোম",
      link: "/",
    },

    {
      id: 3,
      name: "চাকরির প্রস্তুতি ",
      link: "job-preparation",
    },
    {
      id: 4,
      name: "English Grammar",
      link: "english-grammar",
    },
    {
      id: 5,
      name: "বাংলা ব্যাকরণ",
      link: "bangla-grammar",
    },
    {
      id: 6,
      name: "Dictionary",
      link: "dictionary",
    },
  ];
  const navBar = [
    {
      id: 0,
      name: "হোম",
      link: "/",
    },
    {
      id: 1,
      name: "চাকরির তথ্য",
      link: "job-info",
    },
    {
      id: 2,
      name: "শিক্ষা তথ্য",
      link: "edu-info",
    },
    {
      id: 3,
      name: "চাকরির প্রস্তুতি ",
      link: "job-preparation",
    },
    {
      id: 4,
      name: "English Grammar",
      link: "english-grammar",
    },
    {
      id: 5,
      name: "বাংলা ব্যাকরণ",
      link: "bangla-grammar",
    },
    {
      id: 6,
      name: "Dictionary",
      link: "dictionary",
    },
    {
      id: 7,
      name: "জানার আছে",
      link: "general-knowledge",
    },
    {
      id: 8,
      name: "আজকের বিশ্ব",
      link: "current-affairs",
    },
    {
      id: 9,
      name: "টিউটোরিয়াল",
      link: "tutorials",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" bg-white shadow  py-4 fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-6">
        {/* Logo */}
        <div>
          <Link to="/">
            {" "}
            <Logo />{" "}
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          {deskNav.map(({ id, name, link, isLogin }) => (
            <NavLink
              key={id}
              to={link}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-blue-400 transition ${
                  isActive ? "underline underline-offset-4 text-blue-400" : ""
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
        {/* Hamburger Icon for Mobile */}
        <div>
          <button
            onClick={toggleMenu}
            className="text-black text-2xl focus:outline-none "
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-white text-3xl">
            ×
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 text-center items-center space-y-6 ">
          {navBar.map(({ id, name, link, isLogin }) => (
            <NavLink
              key={id}
              to={link}
              className={({ isActive }) =>
                `text-2xl font-medium text-white hover:text-blue-400 transition ${
                  isActive ? "underline underline-offset-4 text-blue-400" : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)} // Close the menu on click
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};
