import React, { useState, useEffect } from 'react';
import Shelf from './Shelf/2wShelf';
import Search from '../Search/Search';
import * as BooksAPI from '../../BooksAPI';

const BookShelves = (props) => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        BooksAPI.getAll().then(results => setBooks(results))
    }, []
    )


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
                        title={'Currently Reading'} />
                    <Shelf
                        sortBooks={wantToRead}

                        title={'Want to Read'} />
                    <Shelf
                        sortBooks={read}

                        title={'Read'} />
                </div>
            </div>
            <Search />
        </div>
    );
};


export default BookShelves;