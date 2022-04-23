import React, { createContext, useContext, useEffect, useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [equal, setEqual] = useState(false);
  const [infoWiner, setInfoWiner] = useState({
    iswiner: false,
    winner: "",
  });
  const [state, setState] = useState({
    player: "Circle",
    posations: [
      "Empty",
      "Empty",
      "Empty",
      "Empty",
      "Empty",
      "Empty",
      "Empty",
      "Empty",
      "Empty",
    ],
  });
  const handleTurn = (pos) => {
    const copyPos = [...state.posations];
    copyPos[pos] = state.player;
    setState({
      posations: copyPos,
      player: state.player === "Circle" ? "Cross" : "Circle",
    });
  };
  const checkWinner = () => {
    const { posations: p } = state;

    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let items of winningConditions) {
      if (items.every((w) => p[w] === "Cross")) {
        setInfoWiner({ iswiner: true, winner: "X" });
      }
      if (items.every((w) => p[w] === "Circle")) {
        setInfoWiner({ iswiner: true, winner: "O!" });
      }
    }
    if (!p.includes("Empty")) {
      setEqual(true);
    }
  };
  const handleReset = () => {
    setState({
      player: "Circle",
      posations: [
        "Empty",
        "Empty",
        "Empty",
        "Empty",
        "Empty",
        "Empty",
        "Empty",
        "Empty",
        "Empty",
      ],
    });
    setInfoWiner({ iswiner: false, winner: "" });
    setEqual(false);
  };
  useEffect(() => {
    checkWinner();
  }, [state.posations]);

  return (
    <ProductsContext.Provider
      value={{
        numbers,
        equal,
        state,
        setState,
        handleTurn,
        infoWiner,
        handleReset,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
