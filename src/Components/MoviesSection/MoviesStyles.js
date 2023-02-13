import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import {MdOutlineDownloading} from "react-icons/md"

export const TContainer = styled.div`
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 2px solid white;

`;
export const TWrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const TH1 = styled.h1`
  color: white;
  font-size: 25px;
  text-align: center;
  &:hover{
    transition: 1s all ease-in-out;
    color: #32cd32;
  }
`;
export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
`;
export const TCards = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  justify-content: space-between;

`;

export const IconRight = styled(AiOutlineArrowRight)`
  z-index: 3;
  width: 50px;
  height: 50px;
  top: 0;
  right: 0;
  position: relative;
  border-radius: 50%;
  color: white;
  cursor: pointer;
`;
export const IconLeft = styled(AiOutlineArrowLeft)`
  z-index: 3;
  width: 50px;
  height: 50px;
  top: 0;
  left: 0;
  position: relative;
  border-radius: 50%;
  color: white;
  cursor: pointer;

`;



export const LoadingIcon = styled(MdOutlineDownloading)`
width: 100px;
height: 100px;
color: white;
`
