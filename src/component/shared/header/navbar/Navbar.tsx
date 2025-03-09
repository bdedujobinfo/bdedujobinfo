"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../logo/Logo";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const deskNav = [
    { id: 0, name: "হোম", link: "/" },
    { id: 3, name: "চাকরির প্রস্তুতি", link: "/job-preparation" },
    { id: 4, name: "English Grammar", link: "/english-grammar" },
    { id: 5, name: "বাংলা ব্যাকরণ", link: "/bangla-grammar" },
    { id: 6, name: "Dictionary", link: "/dictionary" },
  ];

  const navBar = [
    { id: 0, name: "হোম", link: "/" },
    { id: 1, name: "চাকরির তথ্য", link: "/job-info" },
    { id: 2, name: "শিক্ষা তথ্য", link: "/edu-info" },
    { id: 3, name: "চাকরির প্রস্তুতি", link: "/job-preparation" },
    { id: 4, name: "English Grammar", link: "/english-grammar" },
    { id: 5, name: "বাংলা ব্যাকরণ", link: "/bangla-grammar" },
    { id: 6, name: "Dictionary", link: "/dictionary" },
    { id: 7, name: "জানার আছে", link: "/general-knowledge" },
    { id: 8, name: "আজকের বিশ্ব", link: "/current-affairs" },
    { id: 9, name: "টিউটোরিয়াল", link: "/tutorials" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" bg-white shadow  py-4 fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-6">
        <div>
          <Link href="/">
            {" "}
            <Logo />{" "}
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          {deskNav.map(({ id, name, link }) => (
            <Link
              key={id}
              href={link}
              className={`link ${
                pathname === link
                  ? "text-red-600"
                  : "text-blue-700 hover:underline duration-700"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
        {/* Hamburger Icon for Mobile */}
        <div>
          <button
            onClick={toggleMenu}
            className="text-black text-2xl focus:outline-none z-50"
          >
            {isMenuOpen ? "" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-100 bg-opacity-90 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-center p-6 ">
          <button
            onClick={toggleMenu}
            className=" text-white text-3xl bg-red-600  px-2 rounded-md"
          >
            ×
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 text-center items-center space-y-6 ">
          {navBar.map(({ id, name, link }) => (
            <Link
              key={id}
              href={link}
              onClick={() => setIsMenuOpen(false)}
              className={`link ${
                pathname === link
                  ? "text-red-600"
                  : "text-blue-700 hover:underline duration-700"
              }`} // Close the menu on click
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
