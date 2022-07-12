import WetherShow from "./components/WetherShow";
import styled from "styled-components";

function App() {
  const urlApi =
    "https://api.openweathermap.org/data/2.5/weather?q=london&appid=dfb240ff8dd3e699004d6f2b3777a045";

  return (
    <Wrapper>
      <h1>weather react app</h1>
      <div className="info">
        <input type="text" />
        <button className="search">Get</button>
      </div>
      <WetherShow />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 1rem 0px;
  }
  @media screen and (min-width: 768px) {
    max-width: 70%;
  }
`;
