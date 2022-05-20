import React from 'react';
import {useProductsContext} from './context/Context'
import "./App.css";

function App() {
  const {}=useProductsContext()
 
  return <div className="App">
    <h1>admin panel</h1>
  </div>;
}

export default App;
