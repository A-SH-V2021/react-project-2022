import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/Context";

const Result = () => {
  const { infoWiner,handleReset } = useProductsContext();
  return (
    <Wrapper>
      <h3>{infoWiner.winner}</h3>
      <button onClick={handleReset}>Reset Game</button>
    </Wrapper>
  );
};

export default Result;
const Wrapper=styled.div`
button{
  background: green;
  padding: 0.5rem 1rem;
  outline: none;
  border: 1px solid green;
  border-radius: 5px;
  margin-bottom:2rem;
}

`