import { LOGO_URL } from "../utils/constants";
import { CART_ICON } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("header rendered");

  return (
    <div className="header">
      <div className="logo">
        <img
          src={LOGO_URL}
          alt="Food Villa Logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <img
              src={CART_ICON}
              alt="Cart Icon"
            ></img>
          </li>
          <button className="login" onClick={()=>{
            btnName==="Login"? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
