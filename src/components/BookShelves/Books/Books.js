import React from 'react';
import sendUpdate from '../../../BooksAPI';

const Books = (props) => {

    // <select onChange={(event) => props.sendUpdate(book.id, event.target.value)}>
    
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{ width: 128, height: 193, 
                            backgroundImage: `url(${props.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(event) => props.sendUpdate(props.id, event.target.value)}> 
                            <option value="move" disabled>Move to...</option>
                            <option value={"Currently Reading"}>Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{props.title}</div>
                <div className="book-authors">{props.author}</div>
            </div>
        </li>
    );
};


export default Books;