import React from "react";
import styled from "styled-components";
import Circle from "./Circle";
import Cross from "./Cross";

const Squaer = ({ pos, value, handleTurn }) => {
  
  const handleClick = () => {
    if (value === "Empty") {
      handleTurn(pos);
    }
  };
  return (
    <Wrapper>
      <div onClick={handleClick}>
        {value === "Circle" && <Circle />}
        {value === "Cross" && <Cross />}
      </div>
    </Wrapper>
  );
};

export default Squaer;
const Wrapper = styled.div`
  margin: auto;

  div {
    background: transparent;
    width: 170px;
    height: 155px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  div:hover{
   transform: translate(2px,2px);
  }
`;
