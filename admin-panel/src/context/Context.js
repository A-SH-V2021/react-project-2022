import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  


 
  return (
    <ProductsContext.Provider
      value={{}}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
