import React, { useContext, useState } from "react";
import image from "../Images/QuickByte.gif";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [open, setOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(data);

  // Selector for Reading item in cart
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <header className="bg-white rounded-md shadow-lg z-100">
      <nav className="flex justify-between items-center w-[92%]  mx-auto">
        <div className="w-28 h-24 mt-0 ">
          <img className="w-full h-24 cursor-pointer" src={image} alt="..." />
        </div>
        <div
          className={`nav-links duration-700 md:static absolute bg-white md:min-h-fit min-h-[50vh] left-0 z-[50] ${
            open ? "top-[11%]" : "top-[-100%]"
          } md:w-auto  w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-4 text-lg">
            <li className="p-1 py-2">
              <h2 className="hover:text-gray-500">
                STATUS: {onlineStatus ? "🟢" : "🔴"}
              </h2>
            </li>
            <li className="p-1 py-2">
              <Link to="/" className="hover:text-gray-500">
                HOME
              </Link>
            </li>
            <li className="p-1 py-2">
              <Link to="/about" className="hover:text-gray-500">
                ABOUT
              </Link>
            </li>
            <li className="p-1 py-2">
              <Link to="/contact" className="hover:text-gray-500">
                CONTACT
              </Link>
            </li>
            <li className="p-1 py-2">
              <Link to="/grocery" className="hover:text-gray-500">
                GROCERY
              </Link>
            </li>
            <li className="p-1 py-2">
              <Link to="/cart" className="hover:text-gray-500">
                <i className="fa-solid fa-cart-shopping"></i>({cartItems.length}
                )
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {isLoggedin ? (
            <button
              className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
              onClick={() => setIsLoggedin(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
              onClick={() => setIsLoggedin(true)}
            >
              Login
            </button>
          )}
          <ion-icon
            onClick={() => setOpen(!open)}
            name={open ? "close" : "menu"}
            class="text-3xl cursor-pointer md:hidden"
          ></ion-icon>
        </div>
        {/* <li className="p-1 py-2 list-none font-bold">
          <Link to="" className="hover:text-gray-500">
            {loggedInUser}
          </Link>
        </li> */}
      </nav>
    </header>
  );
};

export default Header;
