import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { config } from "./confirg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Star } from "../SeriesSection/SeriesPage";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #1d1d1d;
`;
const H1 = styled.div`
  font-size: 36px;
  text-align: center;
  background-color: transparent;
`;
const Wrapper = styled.div`
  max-width: 1300px;
  height: 80%;
  /* border: 2px solid green; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: transparent;
`;
const Buttondiv = styled.div`
  position: absolute;
  border: 2px solid #7cfc00;
  width: 80%;
  /* top: 0; */

  opacity: 0;
  top: 80%;
`;
const MovieImage = styled.img`
  width: 200px;
  height: 80%;
  /* border: 5px solid white; */
  position: relative;
  z-index: 4;
  top: 1%;
`;
const Border = styled.div`
  position: absolute;
  border: 5px solid white;
  width: 210px;
  height: 82%;
  z-index: 1;
  border-radius: 6px;
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-size: 28px;
  /* border: 2px solid green; */
  width: 80%;
  position: absolute;
  z-index: 20;
  opacity: 0;
  top: 0;
`;
const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 350px;
  margin: 30px 25px;
  position: relative;
  cursor: pointer;
  background-color: transparent;

  &:hover ${MovieImage} {
    opacity: 0.5;
    transition: 0.3s all ease-in-out;
  }
  &:hover ${Rating} {
    opacity: 1;
    transition: 0.3s all ease-in-out;
    top: 20%;
  }
  &:hover ${Buttondiv} {
    opacity: 1;
    transition: 0.3s all ease-in-out;
    top: 50%;
    z-index: 10;
  }
  &:hover ${Border} {
    border: 5px solid #32cd32;
    transition: 0.3s all ease-in-out;
  }
`;

const Text = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 20px;
  width: 100%;
  background-color: transparent;
`;

const Btn = styled.button`
  color: white;
  text-align: center;
  width: 100%;
  background-color: #32cd32;
  padding: 10px;
  font-weight: 700;
  font-size: 18px;
`;
const Title = styled.h1`
  background-color: transparent;
`;

const Releasedt = styled.div`
  background-color: transparent;
`;
const PageBtns = styled.div`
  background-color: transparent;
  display: flex;
  width: 20%;
  justify-content: space-between;
`;
const PageNum = styled.div`
  background-color: transparent;
  font-size: 18px;
`;
const PageBtn = styled.button`
  background-color: transparent;
  border: 2px solid grey;
  padding: 5px;
  border-radius: 5px;
  font-weight: 600;
  &:hover{
    transition: 0.5s all ease-in-out;
    color: #32cd32;
    border: 2px solid #32cd32;

  }
`;

const MoviePage = () => {
  const [displayMovies, setDisplayMovies] = useState([]);
  const [MoviePages, setMoviePages] = useState(1);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3//movie/popular?api_key=a3b8b604f08728fd99d79b7f4a9e99fb&page=${MoviePages}`
      )
      .then((response) => {
        setDisplayMovies(response.data.results.slice(0, 20));
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, [MoviePages]);
  console.log(displayMovies);

  function buildImageUrl(baseUrl, size, filePath) {
    return `${baseUrl}/${size}/${filePath}`;
  }

  const handleDivLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Container>
      <Navbar />
      <H1>MOVIES</H1>
      <PageBtns>
        {MoviePages > 1 && (
          <PageBtn
            onClick={() => setMoviePages(MoviePages - 1)}
            direction="prev"
          >
            Prev
          </PageBtn>
        )}
        <PageNum>{MoviePages}</PageNum>
        {MoviePages < 60 && (
          <PageBtn
            onClick={() => setMoviePages(MoviePages + 1)}
            direction="next"
          >
            Next
          </PageBtn>
        )}
      </PageBtns>
      <Wrapper>
        {displayMovies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            style={{ backgroundColor: "#1d1d1d" }}
            key={movie.id}
          >
            <MovieCard
              movie={movie}
              style={{ display: isloading ? "none" : "" }}
              key={movie.id}
            >
              <MovieImage
                src={buildImageUrl(
                  config.baseUrl,
                  config.size,
                  movie.poster_path
                )}
                onLoad={handleDivLoad}

              />
              <Border />
              <Buttondiv>
                <Btn>View Details</Btn>
              </Buttondiv>
              <Rating><Star/> {movie.vote_average} </Rating>
              <Text>
                <Title>{movie.original_title}</Title>
                <Releasedt>{movie.release_date}</Releasedt>
              </Text>
            </MovieCard>
          </Link>
        ))}
      </Wrapper>
    </Container>
  );
};

export default MoviePage;
