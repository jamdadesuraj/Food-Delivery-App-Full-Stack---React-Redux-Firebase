import React, { useEffect } from "react";
import "./css/header.css";
import Logo from "./img/logo.png";
import profile from "../components/img/profile.jpg";

import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";

const Header = () => {
  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  return (
    <>
      <header>
        <img src={Logo} alt="logo" className="logo" />

        {/* search bar */}
        <div className="inputBox">
          <SearchRounded className="searchIcon" />
          <input type="text" placeholder="search here..." />
        </div>

        {/* shopping cart */}

        {/* profile */}
        <div className="profileContainer">
          <div className="imgBox">
            <img src={profile} alt="profile" className="profilePic" />
          </div>
          <h2 className="userName">Suraj</h2>
        </div>

        {/* toggle */}

        <div className="toggleMenu">
          <div className="shoppingCart">
            <ShoppingCartRounded className="cart " />
            <div className="cart_content">
              <p>2</p>
            </div>
          </div>
          {/* <ShoppingCartRounded className="cart" /> */}
        </div>
      </header>
    </>
  );
};

export default Header;
