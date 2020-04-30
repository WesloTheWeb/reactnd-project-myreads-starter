import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Books from './Books/Books';


const toggleReading = () => {
    console.log(`Added to reading`);
        // addToReading(!reading);

}  



const BookShelves = (props) => {

    const [reading, addToReading] = useState([]);
    const [wantToRead, addToWant] = useState([]);
    const [completedRead, addToCompleted] = useState([]);

// Add to Reading

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
                <button onClick={toggleReading}>Click me</button>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf" >
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <Books
                                    status={toggleReading}
                                    title='To Kill a Mockingbird'
                                    author='Harper Lee'
                                    cover={`PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_ap`}
                                />
                                <Books
                                    title={`Ender's Game`}
                                    author={`Orson Scott Card`}
                                    cover={`yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api`}
                                />
                            </ol>
                        </div>
                    </div >
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <Books
                                    title={`1776`}
                                    author={`David McCullough`}
                                    cover={`uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api`}
                                />
                                <Books
                                    title={`Harry Potter and the Sorcerer's Stone`}
                                    author={`J.K. Rowling`}
                                    cover={`wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api`}
                                />
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <Books
                                    title={`The Hobbit`}
                                    author={`J.R.R. Tolkien`}
                                    cover={`pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api`}
                                />
                                <Books
                                    title={`Oh the Places You;ll Go!`}
                                    author={`Seuss`}
                                    cover={`1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api`}
                                />
                                <Books
                                    title={`The Adventures of Tom Sawyer`}
                                    author={`Mark Twain`}
                                    cover={`32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api`}
                                />
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to="search"><button>Add a book</button></Link>
                {/* <button onClick={props.search}>Add a book</button> */}
                {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}
            </div>
        </div>
    );
};


export default BookShelves;