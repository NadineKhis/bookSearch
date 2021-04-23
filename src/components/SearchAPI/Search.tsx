import React, {useEffect, useState, useCallback} from "react";
import {BookItem} from "../BookItem/BookItem";
import {useSelector} from "react-redux";
import axios from "axios";
import {debounce} from "lodash";
import {RootState} from "../../store/rootStore";
import styled from "styled-components";
import {colorRed, lightPink, pink, darkPink, pinkShadow, pinkBorder} from "../../constants/constants";
import Magnifier from "../../icons/magnifier.png";

const Content = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column;
`;
const Books = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  @media (max-width: 1124px) {
    max-width: 800px;
  }
  @media (max-width: 800px) {
    max-width: 500px;
  }
  @media (max-width: 540px) {
    max-width: 250px;
  }
`;
const FormWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 20rem;
  flex-direction: column;
`;
const Logo = styled.p`
  font-size: 22px;
  font-weight: 900;
  text-align: center;
  color: ${darkPink};
`
const Form = styled.div`
  display: flex;
  width: 30rem;
  height: 4.1rem;
  padding-top: 20px;
  
  @media (max-width: 620px) {
    width: 20rem;
  }  
  @media (max-width: 445px) {
    width: 17rem;
  }

  input {
    width: 100%;
    padding: 10px 15px;
    background-color: transparent;
    font-size: 18px;
    line-height: 18px;
    color: ${colorRed};
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: 95% center;
    border-radius: 50px;
    border: 2px solid ${pinkBorder};
    transition: all 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;

    &::placeholder {
      color: ${darkPink};
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    &:hover,
    &:focus {
      padding: 12px 0;
      outline: 0;
      border: 2px solid transparent;
      border-bottom: 2px solid ${pinkBorder};
      border-radius: 0;
      background-position: 100% center;
    }

    @media (max-width: 445px) {
      font-size: 14px;
    }

  }
`
const Button = styled.button`
  margin-left: 10px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;

  font-weight: 600;
  color: ${colorRed};
  text-transform: uppercase;
  padding: 0.2em 1em;;
  background: ${lightPink};
  border: 2px solid ${pinkBorder};
  border-radius: 50%;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);

  &:hover {
    background: ${pink};
  }

  &:active {
    background: ${pink};
    transform: translate(0em, 0.75em);

    &::before {
      box-shadow: 0 0 0 2px ${pinkBorder}, 0 0 ${pinkShadow};
      transform: translate3d(0, 0, -1em);
    }
  }
`;

export const Search: React.FC = () => {
    // const [books, setBooks] = useState([])
    const booksTest = useSelector((state: RootState) => state.books)
    const books: Array<object> = []
    const [value, setValue] = useState('')
    const getBooks = () => {
        if (value) {
            console.log(`requested ${value}`)
            axios.get('https://openlibrary.org/search.json?q=' + value)
                .then((response) => {
                    let bookList: unknown[] = Array.from(response.data.docs).slice(0, 20)
                    // setBooks(bookList)
                    books.push(bookList)
                    console.log(Array.from(bookList).slice(0, 20))
                })
        }
    }
    useEffect(() => {
        getBooks()
    })
    const changeSearchFor = debounce(setValue, 1000);
    const handleChange = useCallback(changeSearchFor, []);
    console.log(books)
    return (
        <Content>
            <FormWrapper>
                <Logo>
                    Go ahead, enter the name of a book
                </Logo>
                <Form>
                    <input
                        type="text"
                        placeholder="search for 📚"
                        className="search__input"
                        id="input"
                        onChange={(event) => handleChange(event.target.value)}
                    />
                    <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        getBooks()
                    }}>
                        <img width="15px" src={Magnifier}/>
                    </Button>
                </Form>
            </FormWrapper>

            <Books>
                {
                    booksTest.map((obj => {
                        return (
                            <BookItem cover={obj.cover} nameOfBook={obj.title} author={obj.author}/>
                        )
                    }))
                }
            </Books>
        </Content>
    )
}