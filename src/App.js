import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchBooks from './components/SearchBooks/SearchBooks';
import BookShelves from './components/BookShelves/BookShelves';


/*
 * TODO: Instead of using this state variable to keep track of which page
 * we're on, use the URL in the browser's address bar. This will ensure that
 * users can use the browser's back and forward buttons to navigate between
 * pages, as well as provide a good URL they can bookmark and share.
 */

const BooksApp = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <Route exact path="/" component={BookShelves} />
        <Route path="/search" component={SearchBooks} />
        {/* {showSearchPage ?
          <SearchBooks />:
          <BookShelves />
          } */}
      </div>
    </BrowserRouter>
  )
}

export default BooksApp;
