import React from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
import { useRef } from "react";
import "./navbar.css";
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    
    <div className="navbar__con">
      <div className="container navbar__container">
        <div className="navbar__logo">logo</div>
        <div className="navbar__list_item_container">
          <ul className="list__item" ref={navRef}>
            <li>
              <Link to="/" className="list__items">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="list__items">
                Features
              </Link>
            </li>
            <li>
              <Link to="/clubs" className="list__items">
                Clubs
              </Link>
            </li>
            <li>
              <Link to="/shop" className="list__items">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/personalTraining" className="list__items">
                Personal Training
              </Link>
            </li>
            <li>
              <Link to="/contact" className="list__items">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="list__items">
                Gallery
              </Link>
            </li>
            <button className="exit_btn nav_close_btn" onClick={showNavbar}>
              <TiTimes className="navbar__icons close_nav_icon" />
            </button>
          </ul>
          <button className="exit_btn" onClick={showNavbar}>
            <BiMenu className="navbar__icons" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
