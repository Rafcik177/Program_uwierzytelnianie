import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../logo.png"
export const MobileNavBarBrand = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img
          className="mobile-nav-bar__logo"
          src={logo}
          alt="Be Safe Warrior"
          height="54"
        />
      </NavLink>
    </div>
  );
};
