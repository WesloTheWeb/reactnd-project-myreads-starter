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
       const moveBook = (book, shelfName) => {
        // Add new book to new shelf
        console.log(shelfName, books)
        const shelf = books[shelfName].slice(0)
        shelf.push(book);
        
        // Remove old book from old shelf
        const oldShelfName = book.shelf
        const oldShelf = books[book.shelf].filter((currentValue) => currentValue.id !== book.id);
        
        book.shelf = shelfName;
      
        setBooks((prevState) => {
            return {
                ...prevState,
                [shelfName]: shelf,
                [oldShelfName]: oldShelf
            }
        })
    }

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
                            title={SHELF_NAMES[shelfName]}
                            moveBook={moveBook}
                            key={shelfName}
                        />
                    ))}
                </div>
            </div>
            <Search />
        </div>
    );
};

export default BookShelves;