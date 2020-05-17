import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../../BooksAPI';
import Books from '../BookShelves/Books/Books';
// import Shelf from '../BookShelves/Shelf/Shelf';


const SearchBooks = (props) => {

    const [inspect, setInspect] = useState({
        query: "",
        books: []
    });

    const searchQuery = () => {
        setInspect(inspect);
    }

    const handleSearch = async e => {
        try {
            const inspect = e.target.value;
            searchQuery();
            const results = await search(inspect)
            if (results.error) {
                setInspect({
                    ...inspect,
                    books: []
                })
            } else {
                setInspect({
                    ...inspect,
                    books: results
                })
            }
            console.log(results);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper" value={inspect}>
                    {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
                    <input type="text" placeholder="Search by title or author" onChange={handleSearch} />

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {inspect.books.length > 0 && inspect.books.map(book => {
                        return (
                            <Books key={book.id}
                            {...book} />
                        )
                    })}
                </ol>
            </div>
        </div>
    );
};


export default SearchBooks;