import React from "react";
import PropTypes from "prop-types";

const NavBar = () => {
  return (
    <nav
      id="nav-bar"
      className="bg-gray-100 flex justify-between w-full px-5 py-5 border-b-1 border-b-gray-300 "
    >
      <h1 className="font-bold text-xl text-gray-800">Gillio</h1>
      <div className="flex">
        <svg
          id="cart-icon"
          className="text-gray-800 h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <div
          id="total-price"
          className="flex justify-center ml-3 items-center px-2 border-gray-800 border-solid border-1"
        >
          <p className="font-bold">$100</p>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
