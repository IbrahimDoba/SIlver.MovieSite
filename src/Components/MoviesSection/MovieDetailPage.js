import React from "react";
import styled from "styled-components";
import {
  useParams,
} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { movieConfig } from "./confirg";
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
  /* border: 2px solid blue; */
  background-color: #1d1d1d;

`;
const ConImage = styled.div`
  width: 100%;
  height: 100%;
  /* border: 2px solid yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1;
`;
const BgImage = styled.img`
  /* object-fit: fill; */
  object-fit: contain;
  /* object-fit: cover; */
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
  top: 30%;
  flex: 1;
  background-color: transparent;
  position: absolute;
  /* left: 1;
  right: 0; */
  width: 45%;
`;
const Name = styled.div`
  font-size: 2vw;
  background-color: transparent;
  margin-bottom: 10px;

`;

const ReleaseDt = styled.div`
  font-size: 2vw;
  background-color: transparent;
`;
const Rating = styled.div`
  font-size: 2vw;
  background-color: transparent;
  margin-top: 10px;
`;
const Runtime = styled.div`
  font-size: 1.6vw;
  background-color: transparent;
  margin-top: 10px;
`;
const Status = styled.p`
  font-size: 1.6vw;
  background-color: transparent;
  margin-top: 10px;
`;
const OverView = styled.p`
  font-size: 1.3vw;
  background-color: transparent;
  margin-top: 15px;
`;
const TagLine = styled.p`
  font-size: 1.1vw;
  background-color: transparent;
  margin-top: 10px;
  color: #FFFDD0;
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

const MovieDetailPage = () => {
  const [movie, setMovie] = useState({});
  const movieId = useParams();
  

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=a3b8b604f08728fd99d79b7f4a9e99fb&language=en-US`
      )
      .then((response) => {
        setMovie(response.data);
      });
      
  }, [movieId]);
  console.log("rr", movieId);
  console.log("movie", movie);

  function buildImageUrl(baseUrl, size, filePath) {
    return `${baseUrl}/${size}/${filePath}`;
  }

  if (!movie) {
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
              movie.poster_path
            )}
          />
        </ConImage>
        <Details>
          <BottomLeft>
            <Name>{movie.title}</Name>
            <ReleaseDt>Release Date: {movie.release_date}</ReleaseDt>
            <Rating>Rating: {movie.vote_average} </Rating>
            <Runtime>Runtime: {movie.runtime} Minutes </Runtime>
            <Status>Status: {movie.status}</Status>

            <OverView>
              {" "}
              Description: <br />
              {movie.overview}
            </OverView>
            <TagLine>{movie.tagline}</TagLine>
          </BottomLeft>
          <BottomRight>
            <WatchProvider></WatchProvider>
          </BottomRight>
        </Details>
      </Wrapper>
    </Container>
  );
};

export default MovieDetailPage;
