import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Books from './Books'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired,
    };

    render() {
        const { books } = this.props;

        const filterBooksByShelf = (shelf) => books.filter (book => (
            book.shelf === shelf
        ));

        const currentlyReadingBooks = filterBooksByShelf("currentlyReading");
        const wantToReadBooks = filterBooksByShelf("wantToRead");
        const readBooks = filterBooksByShelf("read");

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