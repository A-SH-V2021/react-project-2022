import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/Context";

function Container() {
  const { info } = useProductsContext();
  const { image, name, symbol, price, link, description } = info;
  return (
    <Wrapper>
      {name ? (
        <div className="container">
          <div className="crypto-img">
            <img src={image} alt="image-currency" />
            <h1 className="title">{name}</h1>
            <h2>{symbol}</h2>
            <a href={link}>visit website</a>
            {/* <h2>{ind}</h2> */}
            <h2>
              the price of {name} is {price}
            </h2>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      ) : (
        <h2 className="empty-text">enter your cryptocurrency</h2>
      )}
    </Wrapper>
  );
}

export default Container;

const Wrapper = styled.div`
  .container {
    display: grid;

    .crypto-img {
      padding: 0.5rem;
      height: 75vh;
      text-transform: capitalize;
      img {
        width: 200px;
      }
      h1 {
        letter-spacing: 2px;
      }
    }
    .description {
      padding: 1rem;
      text-align: justify;
      border-left: 1px solid #333;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    @media screen and (min-width: 768px) {
      grid-template-columns: 40% 60%;
    }
  }
  .empty-text {
    text-transform: capitalize;
    height: 55vh;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
