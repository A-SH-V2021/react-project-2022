import React from "react";
import styled from "styled-components";
import {
  Home,
  Timeline,
  TrendingUp,
  PersonOutline,
  ProductionQuantityLimits,
  Paid,
  Assessment,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebarmenu">
        <h3 className="sidebar-title">dashboard</h3>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Home className="icon" />
            home
          </li>
          <li className="sidebar-item">
            <Timeline className="icon" />
            analitics
          </li>
          <li className="sidebar-item">
            <TrendingUp className="icon" />
            sales
          </li>
        </ul>
      </div>
      <div className="sidebarmenu">
        <h3 className="sidebar-title">quik menu</h3>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <PersonOutline className="icon" />
            user
          </li>
          <li className="sidebar-item">
            <ProductionQuantityLimits className="icon" />
            products
          </li>
          <li className="sidebar-item">
            <Paid className="icon" />
            transactions
          </li>
          <li className="sidebar-item">
            <Assessment className="icon" />
            reports
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
const Wrapper = styled.div`
  height: calc(100vh - 5.2rem);
  background-color: #ebebed;
  .sidebarmenu {
    h3 {
      /* padding-top: 1rem; */
      text-transform: capitalize;
      margin: 0;
    }
  }
  .sidebar-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0.5rem;
    .sidebar-item {
      width: 90%;
      display: flex;
      font-size: 1.2rem;
      padding: 0.5rem;
      text-transform: capitalize;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      .icon {
        color: red;
        padding-right: 0.5rem;
      }
    }
    .sidebar-item:hover {
      border-radius: 10px;
      background-color: #342170;
      color: white;
    }
    .sidebar-item.active {
      border-radius: 10px;
      background-color: #5d44ab;
    }
  }
`;
