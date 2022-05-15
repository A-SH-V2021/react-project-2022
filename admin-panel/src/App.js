import "./App.css";
import Container from "./Components/Container";
import Header from "./Components/Header";
import Searching from "./Components/Searching";
import { useProductsContext } from "./context/Context";
function App() {
  const {}=useProductsContext()

  return (
    <div className="App">
      <Header />
      <Searching />
      <Container/>
    </div>
  );
}

export default App;
