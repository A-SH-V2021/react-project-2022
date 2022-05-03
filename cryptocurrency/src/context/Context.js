import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const endPoint = "https://api.coingecko.com/api/v3/coins/";
// searching endpoint
//  ===> 'https://api.coingecko.com/api/v3/search?query=bitcoin'
const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [searching, setSearching] = useState("");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [symbol, setSymbol] = useState(null);
  const [ind, setInd] = useState("");
  const [usd, setUsd] = useState("");

  const handleRequest = async () => {
    const request = await axios.get(`${endPoint}${searching}`);
    let { data } = request;
    console.log(data);
    // name,symbol,description
  };

  return (
    <ProductsContext.Provider
      value={{
        searching,
        setSearching,
        handleRequest,
        image,
        setImage,
        title,
        setTitle,
        symbol,
        setSymbol,
        ind,
        setInd,
        usd,
        setUsd,
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
