import React from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
// import { useRef } from "react";
import "./navbar.css";
const Navbar = () => {

 
  return (
    <div className="container navbar_container">
      <div className="navbar_logo">Logo</div>
      <nav className="nav_items_container">
        <li className="nav_items">
          <Link to="/" className="nav_item">
            Home
          </Link>
        </li>
        <li className="nav_items">
          <Link to="/clubs" className="nav_item">
            Clubs
          </Link>
        </li>
        <li className="nav_items">
          <Link to="/shop" className="nav_item">
            Shop
          </Link>
        </li>
        <li className="nav_items">
          <Link to="/features" className="nav_item">
            Features
          </Link>
        </li>
        <li className="nav_items">
          <Link to="/personalTraining" className="nav_item">
            Personal Training
          </Link>
        </li>
        <li className="nav_items">
          <Link to="/gallery" className="nav_item">
            Gallery
          </Link>
        </li>
        <li className="nav_items">
          <Link to="/contact" className="nav_item">
            Contact Us
          </Link>
        </li>
        <button className="menu_btn">
          <BiMenu className="menu_btn_icon" />
        </button>
      </nav>
      <button className="close_menu_btn">
        <TiTimes className="close_menu_btn_icon" />
      </button>
    </div>
  );
};

export default Navbar;
