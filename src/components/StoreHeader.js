const StoreHeader = ({ data }) => {
  return (
    <div className="storeheader">
      <div className="container">
        <div className="infos">
          <h1 className="title">{data.name}</h1>
          <p className="description">{data.description}</p>
        </div>
        <img className="infos-img" src={data.picture} alt="restaurant" />
      </div>
    </div>
  );
};

export default StoreHeader;
