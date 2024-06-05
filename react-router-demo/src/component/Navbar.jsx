import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  function NavLinkCSS({ isActive }) {
    return {
      fontWeight: isActive ? "bold" : "normal",
      fontSize: isActive ? "25px" : "20px",
    };
  }
  return (
    <nav>
      <p style={{ backgroundColor: "red" }}>
        Link not give active class but NavLink will
      </p>
      <NavLink style={NavLinkCSS} to={"/"}>
        Home
      </NavLink>
      <NavLink style={NavLinkCSS} to={"/product"}>
        Products
      </NavLink>
      <NavLink style={NavLinkCSS} to={"/about"}>
        About
      </NavLink>
      <NavLink style={NavLinkCSS} to={"/contact"}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
