import logo from "../assets/img/logo-basic.png";

const Loader = () => {
  return (
    <div className="loader">
      <img className="logo" src={logo} alt="deliveroo icon" />
      <span className="text">Chargement</span>
    </div>
  );
};

export default Loader;
