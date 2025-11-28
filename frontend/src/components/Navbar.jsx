import React from "react";
import "./Navbar.scss";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const[open,setOpen]=useState(false);
  const user = true;

  return (
    <div className="navbar">
      <div className="left">
        <ul className="navlinks">
          <li>
            <Link to="/">
              <div className="logo-container">
                <img src={logo} alt="logo" className="logo-img"></img>
                <h2 className="logo-text"> EstateFlow </h2>
              </div>
            </Link>
          </li>

          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/">About</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Contact</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Agents</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul className="navlinks">
          {user ? (
            <div className="user">
              <img src="/pp.png"></img>
              <span>John Doe</span>
              <Link to="/profile" className="profile">
              <div className="notification">
                3
              </div>
              <span>Profile</span></Link>
            </div>
          ) : (
            <>
              <li className="nav-link">
                <Link to="/">Sign-In</Link>
              </li>
              <li className="nav-link">
                <Link to="/" className="register">Sign-Up</Link>
              </li>
            </>
          )}
          <li>
            <div className="menu-icon">
              <img src={menu} alt="" className="menu-img" onClick={()=>setOpen(!open)}></img>
            </div>
          </li>
          <div className= {open? "menu active" : "menu"}>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Agents</Link>
            <Link to="/">Sign-In</Link>
            <Link to="/">Sign-Up</Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
