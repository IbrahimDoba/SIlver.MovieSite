import React from "react";
import styled from "styled-components";
import { config } from "./confirg";
import { useState,  } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

import Loadingsign from "../Apiresponse/Loadingsign";

const Image = styled.img`
  border-radius: 10%;
  height: 40vh;
  width: auto;
  z-index: 1;
  object-fit: contain;
  opacity: 1;
  transition: all 0.5s ease-in-out;
  background-color: transparent;

  &:hover {
    opacity: 0.2;
  }
`;

const Info = styled.div`
  z-index: 3;
  width: 90%;
  height: 100%;
  top: 0;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  color: white;
  display: none;
  margin-top: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  &:hover ${Info} {
    display: block;
  }
  &:hover ${Image} {
    opacity: 0.2;
  }
  
`;

const Name = styled.h1`
  font-size: 1.5vw;
  margin-top: 10px;
  background-color: transparent;
`;
const ReleaseDt = styled.h3`
  background-color: transparent;
  margin-top: 10px;
  font-size: 1.1vw;
`;
const Bottom = styled.div`
  display: flex;
  background-color: transparent;
`;
const Rating = styled.h3`
  margin-right: 10px;
  font-size: 1.2vw;
  background-color: transparent;
`;
const Lang = styled.span`
  background-color: transparent;
  font-size: 1.2vw;
`;

const TrendCard = ({ result }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const name = (true);

  const handleLoadImg = () => {
    setTimeout(() => {
      setIsImageLoading(false);
    }, 500);
  };

  console.log(isImageLoading);

  function buildImageUrl(baseUrl, size, filePath) {
    return `${baseUrl}/${size}/${filePath}`;
  }

  return (
    <Container>
      {" "}
      {isImageLoading && <Loadingsign />}
      <Image
        onLoad={handleLoadImg}
        style={{ display: isImageLoading ? "none" : "block" }}
        src={buildImageUrl(config.baseUrl, config.size, result.poster_path)}
        effect="blur"
        width="100%"
        height="50%"
        alt="not wroking"
        delayTime={400}
      />
      <Info style={{ display: isImageLoading ? "none" : "" }}>
        <Name>
           {name && result.title} {name && result.name}{" "}
        </Name>
        <ReleaseDt>
           {result.release_date} {name && result.first_air_date}
        </ReleaseDt>
        <Bottom>
          <Rating>Ratings: {result.vote_average} </Rating>
          <Lang>Lang: {result.original_language}</Lang>
        </Bottom>
      </Info>
    </Container>
  );
};

export default TrendCard;

// const [isLoading, setIsLoading] = useState(true);
// setTimeout(() => {
//   setIsImageLoading(true);
// }, 2000);
