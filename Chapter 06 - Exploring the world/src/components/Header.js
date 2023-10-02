import React, { useState } from "react";
import image from "../Images/QuickByte.gif";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    // <>
    //   <div className="header">
    //     <div className="logo-container">
    //       <img className="logo" src={image} alt="logo" />
    //     </div>
    //     <div className="nav-items">
    //       <ul>
    //         <li>Home</li>
    //         <li>About Us</li>
    //         <li>Contact Us</li>
    //         <li>Cart</li>
    //       </ul>
    //     </div>
    //   </div>
    // </>
    <div className="header">
      <a href="" className="logo-container">
        <img className="logo" src={image} alt="logo" />
      </a>
      <div className="group">
        <ul className="navigation">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
          <li>
            {/* <button className="login-button">Login</button> */}
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-button "
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button
                className="login-button"
                onClick={() => setIsLoggedin(true)}
              >
                Login
              </button>
            )}
          </li>
        </ul>
        {/* <div className="closeBtn">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="menuToggle">
          <i className="fa-solid fa-bars" onClick={menuToggle}></i>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
