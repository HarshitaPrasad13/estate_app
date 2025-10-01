import React from "react";
import "./Navbar.scss";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import { useState } from "react";


const Navbar = () => {
  const[open,setOpen]=useState(false);
  return (
    <div className="navbar">
      <div className="left">
        <ul className="navlinks">
          <li>
            <a href="/">
              <div className="logo-container">
                <img src={logo} alt="logo" className="logo-img"></img>
                <h2 className="logo-text"> EstateFlow </h2>
              </div>
            </a>
          </li>

          <li className="nav-link">
            <a href="/">Home</a>
          </li>
          <li className="nav-link">
            <a href="/">About</a>
          </li>
          <li className="nav-link">
            <a href="/">Contact</a>
          </li>
          <li className="nav-link">
            <a href="/">Agents</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul className="navlinks">
          <li className="nav-link">
            <a href="/">Sign-In</a>
          </li>
          <li className="nav-link">
            <a href="/" className="register">
              Sign-Up
            </a>
          </li>
          <li>
            <div className="menu-icon">
              <img src={menu} alt="" className="menu-img" onClick={()=>setOpen(!open)}></img>
            </div>
          </li>
          <div className= {open? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign-In</a>
            <a href="/">Sign-Up</a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
