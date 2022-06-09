import React from "react";
import "./App.css";
import { FaHome, FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-darkgrey navbar text-white flex">
      <div className="left-nav fw-500">
        <ul className="flex">
          <li className="hover-underline-animation">
            <FaHome />
          </li>
          <li className="hover-underline-animation">
            <FaHeart />
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <ul className="flex center">
          <li>profileName</li>
          <li>
            <div className="profile"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
