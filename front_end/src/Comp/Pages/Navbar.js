import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Css/Navbar.css";
import Logo from "../Images/logo.svg";
import { Navigate } from "react-router-dom";

const Navbar = ({ isLogged }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <p className="logo"> خدمات طويق</p>
        </NavLink>
        <NavLink className="navbar-brand" to="/services">
          <p>الخدمات</p>
        </NavLink>
        <NavLink className="navbar-brand" to="/about">
          <p>من نحن </p>
        </NavLink>
        {!isLogged ? (
          <NavLink className="navbar-brand" to="/student-login">
            <p>دخول </p>
          </NavLink>
        ) : (
          <NavLink className="navbar-brand" to="/student-login">
            <p> تسجيل الخروج</p>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
