import React, {useEffect, useState, useCallback} from "react";
// import {BookItem} from "./BookItem/BookItem";
import axios from "axios";
import { debounce } from "lodash";

export const Search : React.FC = () => {
    const [books, setBooks] = useState([])
    const [value, setValue] = useState('')
    const getBooks = () => {
        if (value != '') {
            console.log(`requested ${value}`)
            axios.get('https://openlibrary.org/search.json?q=' + value)
                .then((response) => {
                    let bookList = Array.from(response.data.docs).slice(0, 20)
                    // setBooks(bookList)
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
        <div>
            <div className="form">
                <span className="form__icon">
                    bookS
                </span>
                <form className="search__form">
                    <input
                        type="text"
                        placeholder="Enter name of a book"
                        className="search__input"
                        id="input"
                        onChange={(event)=>handleChange(event.target.value)}
                    />
                    <button onClick={(e : React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        getBooks()
                    }}>
                        Get
                    </button>
                    <img alt="" className="search__img"/>
                </form>
            </div>
            <div className="books">
                {/*< BookItem author={}/>*/}

            </div>
        </div>
    )
}