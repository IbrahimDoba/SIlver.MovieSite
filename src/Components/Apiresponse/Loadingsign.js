import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 16px solid white ;
  border-top: 16px solid #32cd32;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loadingsign = () => {
  return <Container></Container>;
};

export default Loadingsign;
