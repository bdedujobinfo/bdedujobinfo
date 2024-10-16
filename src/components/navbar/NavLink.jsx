/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, Link } from "react-router-dom";

export const NavLink = () => {
     const navBar = [
       {
         id: 1,
         name: "চাকরির তথ্য",
         link: "/",
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
  return (
    <nav>
      {navBar.map(({ id, name, link }) => (
        <li key={id}>
          <Link className='py-2 font-semibold' to={link}>{name}</Link>
        </li>
      ))}
    </nav>
  );
}
