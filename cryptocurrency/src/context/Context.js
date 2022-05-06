import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const endPoint = "https://api.coingecko.com/api/v3/coins/";
// searching endpoint
//  ===> 'https://api.coingecko.com/api/v3/search?query=bitcoin'
const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [searching, setSearching] = useState("");
  const [info, setInfo] = useState({});
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [symbol, setSymbol] = useState(null);
  const [ind, setInd] = useState("");
  const [usd, setUsd] = useState("");

  const handleRequest = async () => {
    setSearching('')
    const request = await axios.get(`${endPoint}${searching}`);
    let { data } = request;
    const {
      id,
      image: { large },
      name,
      symbol,
      links: { homepage },
      market_data: {
        current_price: { usd },
      },
      description:{en}
    } = data;
    const info = {
      id,
      image: large,
      name,
      symbol,
      link: homepage[0],
      price: usd,
      description:JSON.stringify(en),
    };
    setInfo(info);
    //bitcoin, name,symbol,description
  };
 
  return (
    <ProductsContext.Provider
      value={{
        searching,
        setSearching,
        handleRequest,
        info,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
