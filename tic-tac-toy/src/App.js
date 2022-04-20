import { useState } from "react";
import Squaer from "./components/Squaer";
import styled from "styled-components";
import Result from './components/Result'
import { useProductsContext } from "./context/Context";

function App() {
  const {
    numbers,
    state,
    handleTurn,
    infoWiner,
  } = useProductsContext();
  return (
    <Wrapper>
      <h1>tic tac toe</h1>
      <div className="container">
        {numbers.map((_, idx) => {
          return (
            <Squaer
              key={idx}
              pos={idx}
              value={state.posations[idx]}
              handleTurn={handleTurn}
            />
          );
        })}
      </div>
      {infoWiner.iswiner && <Result/>}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    margin-top: 5rem;
    text-transform: capitalize;
  }
  .container {
    display: grid;
    max-width: 684px;
    height: 90%;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    gap: 10px;
   padding-bottom: 3rem;
  }
  
`;
