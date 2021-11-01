import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const {user, logOut} = useAuth();
  const activeStyle = {
    background: "#e10f28",
    color: "#fff",
    borderRadius: "5px",
  };
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <NavLink className="logo" to="/">
            <h5>
              <span className="name"> HK </span> <br />{" "}
              <span className="logo-text">Travel</span>{" "}
            </h5>{" "}
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-5 mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  className="menu-link"
                  activeStyle={activeStyle}
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="menu-link"
                  activeStyle={activeStyle}
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="menu-link"
                  activeStyle={activeStyle}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="menu-link"
                  activeStyle={activeStyle}
                  to="/contact"
                >
                  Contact us
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="menu-link"
                  activeStyle={activeStyle}
                  to="/myorder"
                >
                 MY Order
                </NavLink>
              </li>
              <li className="nav-item header-form">
              
              {user.email ? 
             <NavLink onClick={logOut}
             className="menu-link"
             activeStyle={activeStyle}
             to="/signin"
           >
             Sign Out
           </NavLink>
             :
                <NavLink
                className="menu-link"
                activeStyle={activeStyle}
                to="/signin"
              >
                Sign In
              </NavLink>} <br/> <span>{user.displayName}</span>
            </li>
            <li className="nav-item">
             
             <NavLink
                className="menu-link"
                activeStyle={activeStyle}
                to="/signup"
              >
                Sign Up
              </NavLink>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
