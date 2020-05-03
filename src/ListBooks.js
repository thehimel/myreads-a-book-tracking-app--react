import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Books from './Books'

class ListBooks extends Component {
    render() {
        const { books } = this.props;

        const currentlyReadingBooks = books.filter(book => (
            book.shelf === "currentlyReading"
        ));

        const wantToReadBooks = books.filter(book => (
            book.shelf === "wantToRead"
        ));

        const readBooks = books.filter(book => (
            book.shelf === "read"
        ));

        const noneBooks = books.filter(book => (
            book.shelf === "none"
        ));

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
                    <Books books={noneBooks} bookshelfTitle="None" onUpdateShelf={this.props.onUpdateShelf} />
                </div>
                </div>
                <Link to='/search' className="open-search">
                    Add a book
                </Link>
          </div>
        );
    }
}

export default ListBooks;