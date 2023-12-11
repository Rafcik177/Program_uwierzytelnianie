import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../logo.png"
export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src={logo}
          alt="Be Safe Warrior logo"

        />
      </NavLink>
    </div>
  );
};
