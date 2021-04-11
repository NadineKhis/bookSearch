import React from 'react';

interface SnippetProps {
    cover: string,
    nameOfBook: string,
    author: string,
}

export const BookItem : React.FC<SnippetProps> = ({ cover, nameOfBook, author}) => {
    return (
        <div>BookItem</div>
    )
}