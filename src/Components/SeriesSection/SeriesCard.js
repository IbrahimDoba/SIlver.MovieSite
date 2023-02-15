import React, { useState } from "react";
import styled from "styled-components";
import Loadingsign from "../Assets/Loadingsign";
import { config } from "../MoviesSection/confirg";

const Image = styled.img`
   border-radius: 10%;
  height: 10%;
  width: 90%;
  z-index: 1;
  object-fit: cover;
  opacity: 1;
  transition: all 0.5s ease-in-out;
  background-color: #1d1d1d;

  &:hover {
    opacity: 0.2;
  }
  @media screen and (max-width: 900px) {
    width: 110px;
  }
  @media screen and (max-width: 520px) {
    width: 73px;
  }

`;

const Info = styled.div`
 z-index: 3;
  width: 90%;
  height: 100%;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
  color: white;
  display: none;
  margin-top: 10px;
  /* border: 2px solid yellow; */
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1d1d1d;
  /* border: 2px solid blue; */

  &:hover ${Info} {
    display: flex;
  }
  &:hover ${Image} {
    opacity: 0.2;
  }
`;

const Name = styled.h1`
   font-size: 1.5vw;
  margin-top: 10px;
  background-color: transparent;
  text-align: center;
  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
  @media screen and (max-width: 495px) {
    font-size: 10px;
  }
`;
const ReleaseDt = styled.h3`
    background-color: transparent;
  margin-top: 10px;
  font-size: 1.1vw;
  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
  @media screen and (max-width: 495px) {
    display: none;
  }
`;
const Bottom = styled.div`
   display: flex;
  background-color: transparent;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;
const Rating = styled.h3`
  margin-right: 10px;
  font-size: 1.2vw;
  background-color: transparent;
  @media screen and (max-width: 900px) {
    margin-right: 3px;
    font-size: 13px;
  }
  @media screen and (max-width:495px) {
    font-size: 8px;
  }
`;
const Lang = styled.span`
 background-color: transparent;
  font-size: 1.2vw;
  @media screen and (max-width: 900px) {
    font-size: 13px;
  }
  @media screen and (max-width:495px) {
    font-size: 8px;
  }
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
