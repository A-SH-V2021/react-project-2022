import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Searching from "./Components/Searching";

function App() {
  const [searching, setSearching] = useState("");
  return (
    <div className="App">
      <Header />
      <Searching />
    </div>
  );
}

export default App;
