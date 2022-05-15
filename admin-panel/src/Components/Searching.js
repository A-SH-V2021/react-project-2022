import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/Context";

const Searching = () => {
  const {searching,setSearching,handleRequest}=useProductsContext()

  return (
    <Wrapper>
      <div className="">
        <input value={searching} type="text" placeholder="Enter name of crypto" onChange={(e)=>setSearching(e.target.value)}/>
        <button onClick={handleRequest}>get info</button>
      </div>
    </Wrapper>
  );
};

export default Searching;

const Wrapper = styled.main`
  background: #f7f7f2;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  input {
    padding: 0.7rem 1rem;
    border-radius: 3px;
    outline: none;
    border: 1px solid;
    margin-right: 2rem;
  }

  button {
    text-transform: capitalize;
    padding: 10px 25px;
    border: unset;
    border-radius: 15px;
    color: #212121;
    z-index: 1;
    background: #e4e6c3;
    position: relative;
    font-weight: 1000;
    font-size: 17px;
    transition: all 0.5ms;
    overflow: hidden;
  }

  button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #212121;
    z-index: -1;
    transition: all 250ms;
  }

  button:hover {
    color: #e8e8e8;
  }

  button:hover::before {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    input {
      padding: 0.7rem 2rem;
      margin-right: 3rem;
    }
  }
`;
