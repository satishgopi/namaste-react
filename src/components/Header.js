import { IMG_URL } from "../utils/logo";
import { useState } from "react";

// const swigurl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.678441149265453&lng=83.21218997240067&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
// "cloudinaryImageId": "uaymahqzlitj7ldwlefl",

const Header = () => {
  const [loginName, setLoginName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={IMG_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                loginName === "Login"
                  ? setLoginName("Signout")
                  : setLoginName("Login");
              }}
            >
              {loginName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
