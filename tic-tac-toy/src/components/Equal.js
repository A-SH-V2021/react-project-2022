import React from 'react'
import styled from 'styled-components';
import { useProductsContext } from "../context/Context";

const Equal = () => {
  const { handleReset } = useProductsContext();

  return (
    <Wrapper>
   <h3>the game is equal</h3>
    <div className="">
      <button onClick={handleReset}>Reset</button>
    </div>
  </Wrapper>
  )
}

export default Equal
const Wrapper = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background: green;
    padding: 0.5rem 1rem;
    outline: none;
    border: 1px solid green;
    border-radius: 5px;
  }
`;