import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/css/responsive.css";
import "./components/css/main.css";
import "./components/css/menu.css";
import "./components/css/bottomMenu.css";
import "./components/css/itemcart.css";
import "./components/css/debitCard.css";
import "./components/css/cartItems.css";
import { MenuItems, Items } from "./components/Data";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import banner from "./components/img/banner.png";
import {
  HomeRounded,
  Chat,
  AccountBalanceWalletRounded,
  Favorite,
  SummarizeRounded,
  Settings,
} from "@mui/icons-material";
import BannerName from "./components/BannerName";
import SubMenuContainer from "./components/SubMenuContainer";
import MenuCart from "./components/MenuCart";
import ItemCart from "./components/ItemCart";
import DebitCard from "./components/DebitCard";
import CartItem from "./components/CartItem";
import { useStateValue } from "./components/redux/StateProvider";

function App() {
  const [isMenu, setIsMenu] = useState(
    Items.filter((e) => e.itemId === "buger01")
  );

  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu cart active toggle
    const menuCarts = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCart");

    function setMenuCartActive() {
      menuCarts.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuCarts.forEach((n) => n.addEventListener("click", setMenuCartActive));
  }, [isMenu, cart]);

  // filter menu items

  const setMenu = (itemId) => {
    setIsMenu(Items.filter((e) => e.itemId === itemId));
  };

  return (
    <div className="App">
      {/* header section */}
      <Header />

      {/* main Container */}
      <main>
        <div className="mainContainer">
          {/* banner */}
          <div className="banner">
            <BannerName name={"suraj"} discount={"20"} link={"#"} />
            <img src={banner} alt="banner-img" className="deliveryPic" />
          </div>
        </div>

        {/* dishContainer */}
        <div className="dishContainer">
          <div className="menuCart">
            <SubMenuContainer name={"Menu Category"} />
          </div>
          <div className="rowContainer">
            {MenuItems &&
              MenuItems.map((data) => (
                <div key={data.id} onClick={() => setMenu(data.itemId)}>
                  <MenuCart
                    imgSrc={data.imgSrc}
                    name={data.name}
                    isActive={data.id === 1 ? true : false}
                  />
                </div>
              ))}
          </div>

          {/* dish items */}

          <div className="dishItemContainer">
            {isMenu &&
              isMenu.map((data) => (
                <ItemCart
                  key={data.id}
                  itemId={data.id}
                  imgSrc={data.imgSrc}
                  name={data.name}
                  rating={data.ratings}
                  price={data.price}
                />
              ))}
          </div>

          {/* dish item end */}
        </div>

        {/* right menu */}

        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          {!cart ? (
            <div></div>
          ) : (
            <div className="cartCheckOutContainer">
              <SubMenuContainer name={"Carts Items"} />
              <div className="cartContainer">
                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.itemId}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$</span>45
                </p>
              </div>
              <button className="checkout">Checkout</button>
            </div>
          )}
        </div>
      </main>

      {/* Bottom menu */}
      <div className="bottomMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome/>
          {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<Chat />} />
          {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
          {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<Settings />} />

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
