import Item from "./Item";

const BasketItems = ({ basket, setBasket }) => {
  return basket.map((item, index) => {
    return <Item key={index} item={item} index={index} basket={basket} setBasket={setBasket} />;
  });
};

export default BasketItems;
