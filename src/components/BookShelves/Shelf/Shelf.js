import React from 'react';

const Shelf = (props) => {

    // Test to see our array
    // console.log(library);

    const { sortBooks, library, title } = props;
    // Local State we use that is destructured

    return (
        <section className="bookshelf" >
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {sortBooks.map(book => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover"
                                        style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                                        }}>
                                    </div>
                                    <div className="book-shelf-changer">
                                        <select value={library.shelf} 
                                            onChange={e => {props.moveBook(book, e.target.value)}}
                                        >
                                            <option value="move" disabled>Move to...</option>
                                            <option value="Currently Reading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section >
    );
};


export default Shelf;