import React, { useState } from 'react';
// import Books from './Books/Books';
import Shelf from './Shelf/Shelf';
import Search from '../Search/Search';
// import * as BooksAPI from '../../BooksAPI';

const BookShelves = (props) => {

    const library = [];
    const currentlyReading = library.filter(book => book.shelf === "currentlyReading");
    const wantToRead = library.filter(book => book.shelf === "wantToRead");
    const read = library.filter(book => book.shelf === "read");

    // const [status, setStatus] = useState("none")

    // const handleChange = e => {
    //     setStatus(e.target.value)
    //     // api call
    // }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf
                        tile={props.title} />
                    <Shelf
                        tile={props.title} />
                    <Shelf
                        tile={props.title} />
                </div>
            </div>
            <Search />
        </div>
    );
};


export default BookShelves;