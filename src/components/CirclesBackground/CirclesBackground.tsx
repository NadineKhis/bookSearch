import React from "react";
import styled, {keyframes} from "styled-components";
import "../../constants/constants";
import {colorRed, colorBlue, colorGreen, colorYellow} from "../../constants/constants";

const animate = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }

  100% {
    transform: translateY(-1200px) rotate(720deg);
  }
  
`;

const List = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Circle = styled.li`
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  border-radius: 70%;
  animation: ${animate} 25s linear infinite;
  bottom: -150px;
  
  &:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
  }

  &:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  &:nth-child(3) {
    left: 30%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
    animation-duration: 12s;
  }

  &:nth-child(4) {
    left: 70%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  &:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    animation-duration: 10s;
  }

  &:nth-child(6) {
    left: 75%;
    width: 80px;
    height: 80px;
    animation-delay: 3s;
    animation-duration: 12s;
  }

  &:nth-child(7) {
    left: 90%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
    animation-duration: 12s;
  }

  &:nth-child(8) {
    left: 20%;
    width: 50px;
    height: 50px;
    animation-delay: 2s;
    animation-duration: 12s;
  }
`;

const Red = styled(Circle)`
  background: ${colorRed};
`;

const Blue = styled(Circle)`
  background: ${colorBlue};
`;

const Green = styled(Circle)`
  background: ${colorGreen};
`;

const Yellow = styled(Circle)`
  background: ${colorYellow};
`;

export const CirclesBackground = () => {
    return (
        <List>
            <Blue/>
            <Red/>
            <Green/>
            <Yellow/>
            <Blue/>
            <Red/>
            <Green/>
            <Yellow/>
        </List>
    )
};
