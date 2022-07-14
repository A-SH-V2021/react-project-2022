import React from "react";
import styled from "styled-components";

const WetherShow = ({ data}) => {
 console.log(data);
  return (
    <Wrapper>
      <div className="location">
        <h2>{data.name}</h2>
      </div>
      {/* (32°F − 32) × 5/9 = 0°C */}
      <div className="temp">{data ? <p>{Math.floor((data.main.temp-32)*5/9)} °C </p> : null}</div>
      <div className="desc">
        {data ? <p>{data.weather[0].description}</p> : null}
      </div>
      <div className="bottom">
       
          <div className="fell">
            {data ? `${data.main.feels_like}°C ` : null}
            <span>feels like</span>
          </div>
          <div className="humidity">
            {data ? `${data.main.humidity} %` : null}
            <span>humidity</span>
          </div>
          <div className="windy">
            {data ? `${data.wind.speed} MPH` : null}
            <span>wind speed</span>
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
  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 0px 4rem 0px;
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
