import React from 'react';

const Shelf = (props) => {
    return (
        <section className="bookshelf" >
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover"
                                    style={{ width: 128, height: 193, backgroundImage: `url("http://books.google.com/books/content?id=${props.cover}` }}></div>
                                <div className="book-shelf-changer">
                                    <select>
                                        <option value="move" disabled>Move to...</option>
                                        <option onChange={props.status} value={props.newStatus}>Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{props.library.title}</div>
                            <div className="book-authors">{props.author}</div>
                        </div>
                    </li>
                </ol>
            </div>
        </section >);
};


export default Shelf;