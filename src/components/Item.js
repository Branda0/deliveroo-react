import more from "../assets/img/more.png";
import less from "../assets/img/less.png";

const Item = ({ item, index, basket, setBasket }) => {
  const removeItem = () => {
    const newBasket = [...basket];
    if (newBasket[index].quantity === 1) {
      newBasket.splice(index, 1);
    } else {
      newBasket[index].quantity -= 1;
    }
    setBasket(newBasket);
  };

  const addItem = () => {
    const newBasket = [...basket];
    newBasket[index].quantity += 1;
    setBasket(newBasket);
  };

  return (
    <div className="basket-item-container">
      <div className="item-counter">
        <img alt="less-btn" src={less} onClick={removeItem} />
        <span>{item.quantity}</span>
        <img alt="more-btn" src={more} onClick={addItem} />
      </div>
      <div className="item-infos">
        <span>{item.title}</span>
        <span className="item-price">{(item.price * item.quantity).toFixed(2)} €</span>
      </div>
    </div>
  );
};

export default Item;
