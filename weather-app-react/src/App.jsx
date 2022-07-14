import { useEffect, useState } from "react";
import WetherShow from "./components/WetherShow";
import styled from "styled-components";
import Errorhandle from "./components/Errorhandle";

function App() {
  const [location, setLocation] = useState("berlin");
  const [data, setData] = useState("");
  const [error, setError] = useState(false);

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=dfb240ff8dd3e699004d6f2b3777a045`;

  // function
  const fetching = async (e) => {
    if (e.key === "Enter") {
      const data = await fetch(URL).then((response) => response.json());
      if (data.cod === "404") {
        setError(true);
        setData('')
      } else {
        setError(false);
        setData(data);
        setLocation("");
      }
    }
  };
  const fetchingDeafult = async () => {
    const data = await fetch(URL).then((response) => response.json());

    setError(false);
    setData(data);
    setLocation("");
  };
  useEffect(() => {
    fetchingDeafult();
  }, []);

  return (
    <Wrapper>
      <h1>weather react app</h1>
      <div className="info">
        <input
          value={location}
          type="text"
          onKeyPress={fetching}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
        />
      </div>
      {error ? <Errorhandle /> : null}
      <WetherShow data={data} error={error} />
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
  .info {
  }
  .info > input {
    width: 15rem;
    padding: 0.5rem 0.4rem;
    border-radius: 5px;
  }
 
  @media screen and (min-width: 768px) {
    max-width: 70%;
  }
`;
