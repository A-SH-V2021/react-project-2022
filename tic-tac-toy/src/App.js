import { useState } from "react";
import Squaer from "./components/Squaer";
import styled from "styled-components";
import Result from "./components/Result";
import Equal from "./components/Equal";
import { useProductsContext } from "./context/Context";

function App() {
  const { numbers, equal, state, handleTurn, infoWiner } = useProductsContext();
  return (
    <Wrapper>
      <h1>tic tac toe</h1>
      {!infoWiner.iswiner?
      <p>
        it's <span>{state.player}</span> turn
      </p>:''
      
    }
      <div
        className="container"
        style={infoWiner.iswiner ? { pointerEvents: "none" } : {}}
      >
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
      {infoWiner.iswiner && <Result />}
      {equal && !infoWiner.iswiner && <Equal />}
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
  h1 {
    text-transform: capitalize;
  }
  p{
    text-transform: capitalize;
    margin: 0 0 0.8rem 0;
  }
  p>span{
    background-color: #999;
    color: yellow;
    border-radius: 50%;
    padding: 0.5rem;
  }
  .container {
    display: grid;
    max-width: 684px;
    height: 90%;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    gap: 10px;
  }
`;
