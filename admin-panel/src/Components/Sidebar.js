import React from "react";
import styled from "styled-components";
import { Home, Timeline, TrendingUp } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebarmenu">
        <h2 className="sidebar-title">dashboard</h2>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Home className="icon"/>
            home
          </li>
          <li className="sidebar-item">
            <Timeline className="icon"/>
            analitics
          </li>
          <li className="sidebar-item">
            <TrendingUp className="icon"/>
            sales
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
const Wrapper = styled.div`
  .sidebarmenu {
    h2 {
      text-transform: capitalize;
      margin-bottom: 0;
    }
  }
  .sidebar-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0.5rem;
    .sidebar-item {
      display: flex;
      margin-top: 1rem;
      font-size: 1.2rem;
      padding-left: 0.5rem;
      text-transform: capitalize;
      cursor: pointer;
      .icon{
          color: red;
          padding-right: 0.5rem;
      }
    }
  }
`;
