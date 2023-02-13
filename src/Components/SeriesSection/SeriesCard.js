import React, { useState } from "react";
import styled from "styled-components";
import Loadingsign from "../Apiresponse/Loadingsign";
import { config } from "../MoviesSection/confirg";

const Image = styled.img`
  border-radius: 10%;
  height: 38vh;
  width: auto;
  z-index: 1;
  /* object-fit: fill; */
  object-fit: contain;
  /* object-fit: cover; */
  opacity: 1;
  transition: all 0.5s ease-in-out;
  background-color: transparent;

`;

const Info = styled.div`
  z-index: 3;
  width: 80%;
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
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
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

const SeriesCard = ({ series }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const handleLoadImg = () => {
    setTimeout(() => {
      setIsImageLoading(false);
    }, 500);
  };
  function buildImageUrl(baseUrl, size, filePath) {
    return `${baseUrl}/${size}/${filePath}`;
  }
  return (
    <Container>
      {isImageLoading && <Loadingsign />}
      <Image
        onLoad={handleLoadImg}
        style={{ display: isImageLoading ? "none" : "block" }}
        src={buildImageUrl(config.baseUrl, config.size, series.poster_path)}
        effect="blur"
        width="100%"
        height="50%"
        alt="not wroking"
        delayTime={400}
      />
      <Info style={{ display: isImageLoading ? "none" : "" }}>
        <Name> {series.name}</Name>
        <ReleaseDt> {series.first_air_date}</ReleaseDt>
        <Bottom>
          <Rating>Ratings: {series.vote_average} </Rating>
          <Lang>Lang: {series.original_language}</Lang>
        </Bottom>
      </Info>
    </Container>
  );
};

export default SeriesCard;
