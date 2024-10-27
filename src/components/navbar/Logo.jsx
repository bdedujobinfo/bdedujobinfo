/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../../assets/logo/bdedujob.png";
import { Outlet, Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="max-w-48 " src={logo} alt="bdedujob-logo" />
      </Link>
    </div>
  );
}
