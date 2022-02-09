import { useState } from "react";

const MenuItem = ({ data, basket, setBasket }) => {
  const [isShadow, setIsShadow] = useState(false);

  const addToBasket = () => {
    const newBasket = [...basket];

    const index = newBasket.findIndex((item) => item.id === data.id);

    if (index === -1) {
      newBasket.push({ id: data.id, title: data.title, price: Number(data.price), quantity: 1 });
    } else {
      newBasket[index].quantity = basket[index].quantity + 1;
    }

    setBasket(newBasket);
  };

  return (
    <div className="item-container">
      <div
        className={`item ${isShadow && "shadow"} `}
        onMouseEnter={() => setIsShadow(true)}
        onMouseLeave={() => setIsShadow(false)}
        onClick={addToBasket}
      >
        <div className="item-text">
          <h3 className="item-title">{data.title}</h3>
          <p className="item-description">{data.description}</p>
          <div className="bottom">
            <span className="price">{data.price} €</span>
            {data.popular && (
              <div className="popular">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 32 32"
                >
                  <title>star</title>
                  <path
                    fill="#ff8000"
                    d="M16 2.667l4.12 8.347 9.213 1.347-6.667 6.493 1.573 9.173-8.24-4.333-8.24 4.333 1.573-9.173-6.667-6.493 9.213-1.347 4.12-8.347z"
                  ></path>
                </svg>
                <span>Populaire</span>
              </div>
            )}
          </div>
        </div>
        <div className="image-container">
          {data.picture && <img className="item-img" src={data.picture} alt="menu-item" />}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
