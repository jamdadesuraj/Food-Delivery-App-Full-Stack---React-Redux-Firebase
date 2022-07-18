import React from "react";
import { ChevronRightRounded } from "@mui/icons-material";

const MenuCart = ({ imgSrc, name, isActive }) => {
  return (
    <div className={`rowMenuCart ${isActive ? "active" : ""}`}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{name}</h3>
      <i className="loadMenu">
        <ChevronRightRounded />
      </i>
    </div>
  );
};

export default MenuCart;
