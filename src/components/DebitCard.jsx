import React from "react";

const DebitCard = () => {
  return (
    <div className="cardGroup">
      <img
        src="https://pngimg.com/uploads/visa/visa_PNG4.png"
        alt=""
        className="card_logo"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c"
        alt=""
        className="card_chip"
      />

      <div className="card_number">123 456 789 123 456</div>
      <div className="card_name">Suraj Srj</div>
      <div className="card_from">10/21</div>
      <div className="card_to">10/25</div>
      <div className="card_ring"></div>
    </div>
  );
};

export default DebitCard;
