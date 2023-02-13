import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { movieConfig } from "../MoviesSection/confirg";
import Navbar from "../Navbar/Navbar";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #1d1d1d;
`;
const ConImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1;
`;
const BgImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  background-color: #1d1d1d;
`;
const Details = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #1d1d1d;
  margin-left: 10px;
  width: 100%;
  height: 100%;
`;
const BottomLeft = styled.div`
  top: 20%;
  flex: 1;
  background-color: transparent;
  position: absolute;

  width: 45%;
`;
const Name = styled.div`
  font-size: 2vw;
  background-color: transparent;
  margin-bottom: 10px;
`;


const Seasons = styled.div`
  font-size: 2vw;
  background-color: transparent;
`;

const Episodes = styled.div`
  font-size: 2vw;
  background-color: transparent;
`;
const Rating = styled.div`
  font-size: 2vw;
  background-color: transparent;
  margin-top: 10px;
`;
const Language = styled.div`
  font-size: 1.6vw;
  background-color: transparent;
  margin-top: 10px;
`;
const OverView = styled.p`
  font-size: 1.3vw;
  background-color: transparent;
  margin-top:10px;
`;
const Status = styled.p`
  font-size: 1.6vw;
  background-color: transparent;
`;
const TagLine = styled.p`
  font-size: 1.1vw;
  background-color: transparent;
  margin-top: 10px;
  color: #fffdd0;
`;
const BottomRight = styled.div`
  top: 50%;
  flex: 1;
  background-color: transparent;
  position: absolute;
`;
const WatchProvider = styled.div`
  font-size: 2vw;
  background-color: transparent;
`;

const SeriesDetails = () => {
  const [series, setSeries] = useState({});
  const seriesId = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${seriesId.id}?api_key=a3b8b604f08728fd99d79b7f4a9e99fb&language=en-US`
      )
      .then((response) => {
        setSeries(response.data);
      });
  }, [seriesId]);
  console.log("rr", seriesId);
  console.log("series", series);

  function buildImageUrl(baseUrl, size, filePath) {
    return `${baseUrl}/${size}/${filePath}`;
  }

  if (!series) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <ConImage>
          <BgImage
            src={buildImageUrl(
              movieConfig.baseUrl,
              movieConfig.size,
              series.poster_path
            )}
          />
        </ConImage>
        <Details>
          <BottomLeft>
            <Name>{series.name}</Name>
            <Seasons>No. of Seasons: {series.number_of_seasons}</Seasons>
            <Episodes>No. of Episdoes: {series.number_of_episodes}</Episodes>
            <Rating>Rating: {series.vote_average} </Rating>
            <Language>Language: {series.original_language} </Language>
            <Status>Status: {series.status}</Status>

            <OverView>
              {" "}
              Description: <br />
              {series.overview}
            </OverView>
            <TagLine>{series.tagline}</TagLine>
          </BottomLeft>
          <BottomRight>
            <WatchProvider></WatchProvider>
          </BottomRight>
        </Details>
      </Wrapper>
    </Container>
  );
};

export default SeriesDetails;
