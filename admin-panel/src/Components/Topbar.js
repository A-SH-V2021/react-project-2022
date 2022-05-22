import React from "react";
import img from '../images/profile1.jpg'
import styled from "styled-components";
import {NotificationsActive,Settings,Language} from "@mui/icons-material";
const Topbar = () => {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="logo">admin panel</div>
        <div className="right-section">
          <div className="right-section-ele">
            <NotificationsActive />
            <span>1</span>
          </div>
          <div className="right-section-ele">
            <Settings />
            <span>1</span>
          </div>
          <div className="right-section-ele">
            <Language />
          </div>
          <img src={img} alt="profile"  />
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
  position: sticky;
  top: 0;
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
    .right-section{
      display: flex;
    }
    .right-section-ele {
      margin-right: 1rem;
      position: relative;
      cursor: pointer;
    }
    .right-section-ele > span {
      position: absolute;
      top: -15px;
      right: -12px;
      color: white;
      width: 1.4rem;
      background-color: red;
      border-radius: 50%;
    }
    .right-section>img{
      position: relative;
      top: -4px;
      margin-right: 1.5rem;
      width: 2rem;
      border-radius: 50%;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;
