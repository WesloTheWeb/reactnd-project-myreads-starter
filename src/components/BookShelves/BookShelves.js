import React, { useState, useEffect } from 'react';
import Shelf from './Shelf/Shelf';
import Search from '../Search/Search';
import * as BooksAPI from '../../BooksAPI';

const BookShelves = (props) => {

    // const library = [];
    // const currentlyReading = library.filter(book => book.shelf === "currentlyReading");
    // const wantToRead = library.filter(book => book.shelf === "wantToRead");
    // const read = library.filter(book => book.shelf === "read");

    // TEST
    const [book, setBook] = useState([]);

    const addBook = () => {
        return setBook(book)
    };

    useEffect(() => {
         // BooksAPI.getAll().then(results => addBook(results))

                 BooksAPI.getAll().then(results => console.log(results))

    });

    /* ORIGINAL COPY 
    useEffect(() => {
        // BooksAPI.getAll().then(results => addBook(results))
        BooksAPI.getAll().then(results => addBook(results))

        // BooksAPI.getAll().then(results => console.log(results))
    });



    */

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf
                        library={book}
                        title={'Currently Reading'} />
                    <Shelf
                        title={'Want to Read'} />
                    <Shelf
                        title={'Read'} />
                </div>
            </div>
            <Search />
        </div>
    );
};


export default BookShelves;