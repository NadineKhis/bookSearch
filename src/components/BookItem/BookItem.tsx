import React from 'react';
import {SnippetProps} from "../../types/types"
import styled from "styled-components";
import {darkPink, pinkBorder} from "../../constants/constants";

const Book = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 150px;

  height: 100%;
  padding: 30px;

  text-transform: uppercase;
  color: rgba(240 240 240 / 0.7);

  border-radius: 20px;
  background-image: linear-gradient(150deg,
  rgba(255 255 255 / 40%) 0%,
  rgba(255 255 255 / 10%) 100%);
  backdrop-filter: blur(20px);
  box-shadow: 0 1px 24px -1px rgba(0 0 0 / 10%);

  transition: transform 0.2s ease-out;
  will-change: transform;

  /*   animation-name: spin; */
  animation-timing-function: linear;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
`;

const CoverWrapper = styled.div`

`

const Cover = styled.img`
  border-radius: 15px;
`;

const Title = styled.div`
  color: ${pinkBorder};
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: bold;
`;

const Author = styled.div`
  color: ${darkPink};
  font-size: 14px;
  letter-spacing: 2px;
`;


export const BookItem: React.FC<SnippetProps> = ({cover, nameOfBook, author}) => {
    return (
        <Book>
            <CoverWrapper>
                <Cover src={cover} alt=""/>
            </CoverWrapper>
            <Title>
                <h3>{nameOfBook}</h3>
            </Title>
            <Author>
                <p>{author}</p>
            </Author>
        </Book>
    )
}