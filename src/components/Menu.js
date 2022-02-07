import MenuItem from "./MenuItem";

const Menu = ({ data }) => {
  return (
    <div className="menu-container">
      {data.map((category, index) => {
        return (
          <div className="category-container">
            <h2>{category.name}</h2>
            <div className="menu-items-container">
              {category.meals.map((item, index) => {
                return <MenuItem key={index} data={item} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
