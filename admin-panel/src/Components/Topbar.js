import React from "react";
import styled from "styled-components";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
const Topbar = () => {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="logo">admin panel</div>
        <div className="right-section">
          <NotificationsActiveIcon />
          <span>1</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Topbar;
const Wrapper = styled.nav`
  width: 100%;
  height: 5rem;
  background-color: #342170;
  color: white;
  .wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      padding-left: 4rem;
      text-transform: capitalize;
      cursor: pointer;
      font-size: 1.5rem;
    }
    .right-section {
      margin-right: 4rem;
      position: relative;
      cursor: pointer;
    }
    .right-section > span {
      position: absolute;
      top: -15px;
      right: -12px;
      color: white;
      width: 1.4rem;
      background-color: red;
      border-radius: 50%;
    }
  }
`;
