import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Books from './Books'

class ListBooks extends Component {
    render() {
        const { books } = this.props;
        console.log(books);

        const currentlyReadingBooks = books.filter(book => (
            book.shelf === "currentlyReading"
        ));
        console.log(currentlyReadingBooks);

        const wantToReadBooks = books.filter(book => (
            book.shelf === "wantToRead"
        ));
        console.log(wantToReadBooks);

        const readBooks = books.filter(book => (
            book.shelf === "read"
        ));
        console.log(readBooks);

        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <Books books={currentlyReadingBooks} bookshelfTitle="Currently Reading" onUpdateShelf={this.props.onUpdateShelf} />
                    <Books books={wantToReadBooks} bookshelfTitle="Want to Read" onUpdateShelf={this.props.onUpdateShelf} />
                    <Books books={readBooks} bookshelfTitle="Read" onUpdateShelf={this.props.onUpdateShelf} />
                </div>
                </div>
                <Link to='/search' className="open-search">
                    Search books
                </Link>
          </div>
        );
    }
}

export default ListBooks;