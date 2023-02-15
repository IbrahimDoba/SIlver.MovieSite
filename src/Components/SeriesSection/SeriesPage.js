import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { config } from "../MoviesSection/confirg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Loadingsign from "../Assets/Loadingsign";
import { AiFillStar } from "react-icons/ai";

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
  background-color: #1d1d1d;
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
  @media screen and (max-width: 505px) {
    width: 100%;
    border: 2px solid white ;
  } 
`;
const Border = styled.div`
position: absolute;
  border: 5px solid white;
  width: 210px;
  height: 82%;
  z-index: 1;
  border-radius: 6px;
  @media screen and (max-width: 505px) {
    display: none;
    } 
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
  @media screen and (max-width: 505px) {
    width: 130px;
    /* margin: 10px 20px; */
  } 
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

export const Star = styled(AiFillStar)`
  font-size: 28px;
  color: yellow;
  background-color: transparent;
  margin-right: 10px;
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
  @media screen and (max-width: 505px) {
    width: 50%;
    margin: 10px 0;
  } 
  
`;
const PageNum = styled.div`
  background-color: transparent;
  font-size: 18px;
  
`;
const PageBtnPrev = styled.button`
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
const PageBtnNext = styled.button`
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

const SeriesPage = () => {
  const [displaySeries, setDisplaySeries] = useState([]);
  const [seriesPages, setSeriesPages] = useState(1);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=a3b8b604f08728fd99d79b7f4a9e99fb&page=${seriesPages}`
      )
      .then((response) => {
        setDisplaySeries(response.data.results.slice(0, 20));
        // setSeriesPages(response.data.page)
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, [seriesPages]);
  console.log("DS", displaySeries);
  console.log("SP", seriesPages);
  console.log("seriespage", seriesPages);

  const handleDivLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  function buildImageUrl(baseUrl, size, filePath) {
    return `${baseUrl}/${size}/${filePath}`;
  }

  return (
    <Container>
      <Navbar />
      <H1>SERIES</H1>
      <PageBtns>
        {seriesPages > 1 && (
          <PageBtnPrev
            onClick={() => setSeriesPages(seriesPages - 1)}
            direction="prev"
          >
            Prev
          </PageBtnPrev>
        )}
        <PageNum>{seriesPages}</PageNum>
        {seriesPages < 60 && (
          <PageBtnNext
            onClick={() => setSeriesPages(seriesPages + 1)}
            direction="next"
          >
            Next
          </PageBtnNext>
        )}
      </PageBtns>
      <Wrapper>
        {isloading && <Loadingsign />}

        {displaySeries.map((series) => (
          <Link
            to={`/series/${series.id}`}
            style={{ backgroundColor: "#1d1d1d" }}
            key={series.id}
          >
            <MovieCard
              movie={series}
              style={{ display: isloading ? "none" : "" }}
              key={series.id}
            >
              <MovieImage
                src={buildImageUrl(
                  config.baseUrl,
                  config.size,
                  series.poster_path
                )}
                onLoad={handleDivLoad}
              />
              <Border />
              <Buttondiv>
                <Btn>View Details</Btn>
              </Buttondiv>
              <Rating>
                {" "}
                <Star />
                {series.vote_average}
              </Rating>
              <Text>
                <Title>{series.name}</Title>
                <Releasedt> {series.first_air_date}</Releasedt>
              </Text>
            </MovieCard>
          </Link>
        ))}
      </Wrapper>
    </Container>
  );
};

export default SeriesPage;
