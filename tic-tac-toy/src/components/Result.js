import React from "react";
import { useProductsContext } from "../context/Context";

const Result = () => {
  const { infoWiner } = useProductsContext();
  console.log(infoWiner);
  return <h3>{infoWiner.winner}</h3>;
};

export default Result;
