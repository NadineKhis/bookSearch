import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        title: 'First Book',
        author: 'Lawrence P.P.',
        cover: "https://covers.openlibrary.org/b/isbn/0385472579-M.jpg"
    },
    {
        id: 2,
        title: 'Second Book',
        author: 'Simon P.P.',
        cover: "https://covers.openlibrary.org/b/isbn/0385472579-M.jpg"
    },
    {id: 3, title: 'Third Book', author: 'Jo P.P.', cover: "https://covers.openlibrary.org/b/isbn/0385472579-M.jpg"},
    {id: 4, title: 'Third Book', author: 'Jo P.P.', cover: "https://covers.openlibrary.org/b/isbn/0385472579-M.jpg"},
    {id: 5, title: 'Third Book', author: 'Jo P.P.', cover: "https://covers.openlibrary.org/b/isbn/0385472579-M.jpg"},
    {id: 6, title: 'Third Book', author: 'Jo P.P.', cover: "https://covers.openlibrary.org/b/isbn/0385472579-M.jpg"},
    {id: 7, title: 'Third Book', author: 'Jo P.P.', cover: "https://covers.openlibrary.org/b/isbn/0385472579-M.jpg"},
    {id: 8, title: 'Third Book', author: 'Jo P.P.', cover: "https://covers.openlibrary.org/b/isbn/0385472579-M.jpg"},
    {id: 9, title: 'Third Book', author: 'Jo P.P.', cover: "https://covers.openlibrary.org/b/isbn/0385472579-M.jpg"},
    {id: 10, title: 'Third Book', author: 'Jo P.P.', cover: "https://covers.openlibrary.org/b/isbn/0385472579-M.jpg"},
    {id: 11, title: 'Third Book', author: 'Jo P.P.', cover: "https://covers.openlibrary.org/b/isbn/0385472579-M.jpg"},
]

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {}
})

export default booksSlice.reducer
