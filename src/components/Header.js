import { LOGO_URL } from "../utils/constants";
import { CART_ICON } from "../utils/constants";

const Header = () => {
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
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <img
              src={CART_ICON}
              alt="Cart Icon"
            ></img>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
