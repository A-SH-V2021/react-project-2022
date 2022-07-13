import React from "react";
import styled from "styled-components";

const WetherShow = ({ data }) => {
  console.log(data);
  const { name } = data;
  //
  return (
    <Wrapper>
      <div className="location">
        <h2>{name}</h2>
      </div>
      <div className="temp">
        {data.main ? <p>{data.main.temp} °F </p> : null}
      </div>
      <div className="desc">
        <p>Cloudy</p>
      </div>
      <div className="bottom">
        <div className="btn-container">
          <div className="fell">
            60 °F <span>feels like</span>
          </div>
          <div className="humidity">
            20% <span>humidity</span>
          </div>
          <div className="windy">
            20MPH <span>wind speed</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WetherShow;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  .location {
    text-align: center;
    font-size: 2rem;
    color: #cf0e8f;
    h2 {
      font-weight: 700;
      letter-spacing: 0.2rem;
    }
  }
  .temp {
    text-align: center;
    p {
      font-size: 4rem;
    }
  }
  .desc {
    margin-top: 4rem;
    text-align: center;
    font-size: 2rem;
  }
  .btn-container {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 0px 4rem 0px;
  }
  .btn-container > div {
    text-align: center;
  }
  footer {
    text-align: center;
  }
  span {
    display: block;
  }
  @media screen and (min-width: 768px) {
    .bottom {
      width: 70%;
    }
  }
`;
