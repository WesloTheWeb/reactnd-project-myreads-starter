import React, { useState, useEffect } from 'react';
import Shelf from './Shelf/Shelf';
import Search from '../Search/Search';
import * as BooksAPI from '../../BooksAPI';

const SHELF_NAMES = {
    currentlyReading: "Currently Reading",
    wantToRead: "Want to Read",
    read: "Read"
}

const BookShelves = (props) => {

    // State as an object, key-value pairs for category.
    const [books, setBooks] = useState({
        currentlyReading: [],
        wantToRead: [],
        read: []
    });


    // Grabbing the data from our Book API
    useEffect(() => {
        BooksAPI.getAll().then(results => {
            const obj = results.reduce((eccumulator, currentValue) => {
                // existing array or a new array
                const shelf = eccumulator[currentValue.shelf] || []
                // eccumulator.currentlyReading
                shelf.push(currentValue)
                return {
                    ...eccumulator,
                    [currentValue.shelf]: shelf
                }
            }, {})
            setBooks(obj)
        })
    }, []
    )

    // Logic for the Select Values in Shelf.js to move books via the select tag
    const moveBook = (book, shelName) => {

        /*This is a console log to test our select value to see if our select choice is being
        read and passed down to the appropriate shelf */
        console.log(`I am now on ${shelf}`);


        /* My Attempt at Mapping out the current state via ID
        - If the book id is matches the book id of current state, then the shelf will map out as is.
        If not then return new ID.
        */

        // I need to access the local state somehow, would {books}.map even work? Tried to assign variable.

        // const newBooks = books.map(b => {
        //     b.id === book.id ? (b.shelf = shelf) : b;
        //     return b;
        // });
        // setBooks(newBooks); 
    }


    // // Logic for filtering book categories of "Currently Reading, Want to Read, and Read"
    // const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    // const wantToRead = books.filter(book => book.shelf === "wantToRead");
    // const read = books.filter(book => book.shelf === "read");

    const keys = Object.keys(books);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {keys.map((shelfName) => (
                        <Shelf
                            sortBooks={books[shelfName]}
                            library={books}
                        />
                    ))}
                </div>
            </div>
            <Search />
        </div>
    );
};


export default BookShelves;