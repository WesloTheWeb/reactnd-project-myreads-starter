import React from 'react';
import { Link } from 'react-router-dom';

const Search = (props) => {
    return (
        <div className="open-search">
            <Link to="search"><button>Add a book</button></Link>
        </div>);
};


export default Search;