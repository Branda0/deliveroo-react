import MenuItem from "./MenuItem";

const Menu = ({ data, basket, setBasket }) => {
  return (
    <div className="menu-container">
      {data.map((category, index) => {
        return (
          <div key={index} className="category-container">
            <h2>{category.name}</h2>
            <div className="menu-items-container">
              {category.meals.map((item, index) => {
                return <MenuItem key={index} data={item} basket={basket} setBasket={setBasket} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
