import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import SeriesCard from "./SeriesCard";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 50vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 2px solid white;
  overflow: hidden;
  position: relative;
  background-color: #1d1d1d;

`;
const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const H1 = styled.h1`
  color: white;
  font-size: 26px;
  text-align: center;
  background-color: #1d1d1d;
  @media screen and (max-width:900px) {
    font-size: 18px;
  }
  &:hover{
    transition: 1s all ease-in-out;
    color: #32cd32;
  }
`;
const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #1d1d1d;

`;
const Cards = styled.div`
   display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  justify-content: space-between;
  align-items: center;
  background-color: #1d1d1d;

  /* border: 2px solid green; */
  @media screen and (max-width:900px) {
  flex-wrap: wrap;
}
`;

const IconRight = styled(AiOutlineArrowRight)`
  z-index: 3;
  width: 50px;
  height: 50px;
  top: 0;
  right: 0;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  background-color: #1d1d1d;

`;
const IconLeft = styled(AiOutlineArrowLeft)`
  z-index: 3;
  width: 50px;
  height: 50px;
  top: 0;
  left: 0;
  position: relative;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  background-color: #1d1d1d;

`;

const Series = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [displaySeries, setDisplaySeries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=a3b8b604f08728fd99d79b7f4a9e99fb&language=en-USpage=1"
      )
      .then((response) => {
        setSeriesData(response.data.results);
        setDisplaySeries(
          response.data.results.slice(currentIndex, currentIndex + 5)
        );
      })
      .catch((error) => {
        console.log("error message", error);
      });
  }, [currentIndex]);
  console.log("series", seriesData);
 

  const handleNext = (direction) => {
    if (direction === "right") {
      setCurrentIndex(currentIndex + 5);
    } else {
      setCurrentIndex(currentIndex - 5);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Link to="/series">
        <H1> Popular series </H1>
        </Link>
        <Arrow>
          {currentIndex > 0 && (
            <IconLeft direction="left" onClick={() => handleNext("left")} />
          )}
          <Cards>
            {displaySeries.map((series) => (
              <Link to={`/series/${series.id}`} result={series} key={series.id}>
                <SeriesCard series={series} key={series.id} />
              </Link>
            ))}
          </Cards>
          {currentIndex < 15 && (
            <IconRight direction="right" onClick={() => handleNext("right")} />
          )}
        </Arrow>
      </Wrapper>
    </Container>
  );
};

export default Series;
