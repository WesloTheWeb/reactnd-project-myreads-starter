import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../../BooksAPI';

const SearchBooks = (props) => {

    const [query, setQuery] = useState({
        query: "",
        books: []
    });

    const searchQuery = () => {
        setQuery(query);
    }

    // const handleSearch = async e => {
    //     try {
    //         const query = e.target.value;
    //         setQuery([query])


    //         if (query.trim()) {
    //             const results = await search(query);
    //             if (results.error) {
    //                 setQuery([])

    //             } else {
    //                 setQuery(query.books = [results])
    //             }
    //         }
    //     } else {
            
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }
    

    const handleSearch = async e => {
        try {
            const query = e.target.value;
            searchQuery();
            const results = await search(query)
            if(results.error) {
                setQuery([])
            } else {
                setQuery(query.books = [results])
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
                <div className="search-books-input-wrapper" value={query}>
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
                <ol className="books-grid"></ol>
            </div>
        </div>
    );
};


export default SearchBooks;