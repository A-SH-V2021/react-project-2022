import React from "react";
import { useProductsContext } from "./context/Context";
import "./App.css";
import Topbar from "./Components/Topbar";

function App() {
  const {} = useProductsContext();

  return (
    <div className="App">
      <Topbar />
      <h1>admin panel</h1>
    </div>
  );
}

export default App;
