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
  justify-content: center;
  align-items: center;
  .container {
    display: grid;
    max-width: 684px;
    height: 80%;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    gap: 10px;
  }
`;
