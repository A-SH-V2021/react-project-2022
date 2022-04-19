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
    background: lightgray;
    width: 170px;
    height: 155px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
