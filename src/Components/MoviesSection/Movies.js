import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import TrendCard from "./MovieCard";
import { Link } from "react-router-dom";

import {
  IconLeft,
  IconRight,
  TCards,
  TContainer,
  TH1,
  Arrow,
  TWrapper,
} from "./MoviesStyles";

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [responseData, setResponseData] = useState([]);
  const [displayResults, setDisplayResults] = useState([]);

  useEffect(() => {
    // fetch data from api

    axios
      .get(
        "https://api.themoviedb.org/3//movie/popular?api_key=a3b8b604f08728fd99d79b7f4a9e99fb"
      )
      .then((response) => {
        setResponseData(response.data.results);
        setDisplayResults(
          response.data.results.slice(currentIndex, currentIndex + 5)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentIndex]);
  console.log("DR", displayResults);
  console.log("RD", responseData);

  const handleSliderClick = (direction) => {
    if (direction === "next") {
      setCurrentIndex(currentIndex + 5);
    } else {
      setCurrentIndex(currentIndex - 5);
    }
  };
  console.log("CI", currentIndex);

  return (
    <TContainer>
      <TWrapper>
        <Link to="/movies">
        <TH1>Trending Movies</TH1>
        </Link>
        <Arrow>
          {currentIndex > 0 && (
            <IconLeft onClick={() => handleSliderClick("prev")} />
          )}
          <TCards>
            {displayResults.map((result) => (
              <Link to={`/movies/${result.id}`} result={result} key={result.id}>
                <TrendCard result={result} key={result.id} />
              </Link>
            ))}
          </TCards>
          {currentIndex < 15 && (
            <IconRight onClick={() => handleSliderClick("next")} />
          )}
        </Arrow>
      </TWrapper>
    </TContainer>
  );
};

export default Trending;
