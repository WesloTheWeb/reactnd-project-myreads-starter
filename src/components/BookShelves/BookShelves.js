import React, { useState, useEffect } from 'react';
import Shelf from './Shelf/Shelf';
import Search from '../Search/Search';
import * as BooksAPI from '../../BooksAPI';

const BookShelves = (props) => {

    // Grabbing from our Book API
    const [books, setBooks] = useState([]);
    useEffect(() => {
        BooksAPI.getAll().then(results => setBooks(results))
    }, []
    )

    // Logic for the Select Values in Shelf.js to move books via the select tag
    const moveBook = (book, shelf) => {

        /*This is a console log to test our select value to see if our select choice is being
        read and passed down to the appropriate shelf */
        console.log(`I am now on ${shelf}`);


        /* My Attempt at Mapping out the current state via ID
        - If the book id is matches the book id of current state, then the shelf will map out as is.
        If not then return new ID.
        */

        // I need to access the local state somehow, would {books}.map even work? Tried to assign variable.
        const bookTitles = { books };

        // bookTitles.map(b => {
        //     b.id === book.id ? (b.shelf = shelf) : b;
        //     return b;
        // });
    }

    // Logic for filtering book categories of "Currently Reading, Want to Read, and Read"
    const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");


    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf
                        sortBooks={currentlyReading}
                        library={books}
                        title={'Currently Reading'}
                        moveBook={moveBook}
                    />
                    <Shelf
                        sortBooks={wantToRead}
                        library={books}
                        title={'Want to Read'}
                        moveBook={moveBook}
                    />
                    <Shelf
                        sortBooks={read}
                        library={books}
                        title={'Read'}
                        moveBook={moveBook}
                    />
                </div>
            </div>
            <Search />
        </div>
    );
};


export default BookShelves;