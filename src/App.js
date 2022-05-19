import "./App.css";
import "./responsive.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import StoreHeader from "./components/StoreHeader";
import Menu from "./components/Menu";
import Basket from "./components/Basket";

import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

library.add(faXmark);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://brandao-deliveroo.herokuapp.com/");
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <StoreHeader data={data.restaurant} />
      <div className="main-content">
        <div className="container">
          <Menu data={data.categories} basket={basket} setBasket={setBasket} />
          <Basket basket={basket} setBasket={setBasket} />
        </div>
      </div>
    </div>
  );
}

export default App;
