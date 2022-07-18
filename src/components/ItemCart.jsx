import React, { useState, useEffect } from "react";
import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { Items } from "./Data";
import { useStateValue } from "./redux/StateProvider";
import { actionType } from "./redux/reducer";
let cartData = [];
const ItemCart = ({ imgSrc, name, rating, price, itemId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [currentVal, setCurrentVal] = useState(Math.floor(rating));

  const [isCart, setCart] = useState(null);

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart]);
  const handleClick = (val) => {
    setCurrentVal(val);
  };

  return (
    <div className="itemCard" id={itemId}>
      <div
        className={`isfavriote ${isFavorite ? "active" : ""}`}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <Favorite />
      </div>
      <div
        className={`islike ${isLike ? "active" : ""}`}
        onClick={() => setIsLike(!isLike)}
      >
        <FoodBankIcon />
      </div>

      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>

      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="rating">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentVal > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>₹ </span>
              {price}
            </h3>
          </div>
          <i
            className="addToCart"
            onClick={() => setCart(Items.find((n) => n.id === itemId))}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
