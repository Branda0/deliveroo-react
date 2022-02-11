import BasketItems from "./BasketItems";
import Pricing from "./Pricing";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

const Basket = ({ basket, setBasket }) => {
  const [bottomBasket, setBottomBasket] = useState(false);
  const isEmpty = basket.length === 0;
  let subTotal = 0;
  let itemsQuantity = 0;
  basket.forEach((element) => {
    subTotal += element.price * element.quantity;
    itemsQuantity += element.quantity;
  });

  const pricing = { delivery: Number(2.5), subTotal: Number(subTotal) };

  return (
    <div className="basket-container shadow">
      <button className={`top-basket-btn ${isEmpty && "isEmpty"}`}>Valider mon panier</button>

      {isEmpty ? (
        <div className="empty-basket">
          <span>Votre panier est vide</span>
        </div>
      ) : (
        <div className={`basket-details ${bottomBasket && "visible"}`}>
          <div className="bot-basket-close-btn-container">
            <div
              className="close-btn"
              onClick={() => {
                setBottomBasket(false);
              }}
            >
              <FontAwesomeIcon icon="xmark" />
            </div>
          </div>
          <BasketItems basket={basket} setBasket={setBasket} />
          <Pricing pricing={pricing} />
        </div>
      )}

      <div className="bottom-btn-new">
        <div
          className={`bot-basket-btn ${isEmpty && "isEmpty center"}`}
          // onClick={!isEmpty ? () => setBottomBasket(true) : () => {}}
          onClick={() => !isEmpty && setBottomBasket(true)}
        >
          {!isEmpty && !bottomBasket && (
            <div className="bot-counter-container">
              <span className="bot-counter">{itemsQuantity}</span>
            </div>
          )}
          <span className="bot-text">
            {bottomBasket ? (isEmpty ? "Voir le panier" : "Valider le panier") : "Voir le panier"}
          </span>
          {!isEmpty && !bottomBasket && (
            <span className="bot-total">{(pricing.subTotal + pricing.delivery).toFixed(2)} €</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
