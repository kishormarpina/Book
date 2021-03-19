import React from 'react';
import BookList from './BookList';
function Book(props) {
    return (
        <div className="Bookcontainer">
            <p>{props.title}</p>
            <p>{props.author}</p>
            <p>{props.description}</p>
            <p>{props.pages}</p>
        </div>
    );
}
export default Book;