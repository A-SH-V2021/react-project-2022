import React from "react";
import styled from "styled-components";
import { useProductsContext } from "./context/Context";
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";

function App() {
  const {} = useProductsContext();

  return (
    <Wrapper className="App">
      <Topbar />
      <div className="main">
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="others">others</div>
      </div>
    </Wrapper>
  );
}

export default App;
const Wrapper=styled.main`
 text-align: center;
.main{
  display: flex;
  .sidebar{
    flex: 2;
    border: 1px solid ;
  }
  .others{
    border: 1px solid ;
    flex: 4;
  }
  @media screen and (min-width: 768px) { 
    .sidebar{
    flex: 1;
  }
   }

}
`