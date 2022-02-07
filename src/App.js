import "./App.css";
import "./responsive.css";

import Header from "./components/Header";
import StoreHeader from "./components/StoreHeader";
import Menu from "./components/Menu";
import Basket from "./components/Basket";

import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://brandao-deliveroo.herokuapp.com/");
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <Header />
      <StoreHeader data={data.restaurant} />
      <div className="main-content">
        <div className="container">
          <Menu data={data.categories} />
          <Basket />
        </div>
      </div>
    </div>
  );
}

export default App;
