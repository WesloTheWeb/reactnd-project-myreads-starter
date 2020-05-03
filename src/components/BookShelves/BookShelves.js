import React, { useState, useEffect } from 'react';
import Shelf from './Shelf/Shelf';
import Search from '../Search/Search';
import * as BooksAPI from '../../BooksAPI';

const BookShelves = (props) => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        BooksAPI.getAll().then(results => setBooks(results))
    }, []
    )

    const moveBook = (book, shelf) => {
        // book.shelf = shelf;
        
        const [item, setItemPos] = useState({books})
        // const setBookPos = 
        book.map( b => {})
    }


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