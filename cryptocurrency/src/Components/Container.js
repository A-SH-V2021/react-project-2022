import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/Context";

function Container() {
  const { img, title, symbol, ind, usd } = useProductsContext();

  return (
    <Wrapper>
      <div className="container">
        <div className="crypto-img">
          <img src={img} alt="image-currency" />
          <h1 className="title">{title}</h1>
          <h2>{symbol}</h2>
          <a href="">link</a>
          <h2>{ind}</h2>
          <h2>{usd}</h2>
        </div>
      </div>
    </Wrapper>
  );
}

export default Container;

const Wrapper = styled.div`
  .container {
    border: 1px solid;
    display: grid;
    grid-template-columns: auto auto;
    .crypto-img {
      height: 65vh;
      border: 1px solid red;
      img {
       
        border: 1px solid blue;
      }
    }
  }
`;
